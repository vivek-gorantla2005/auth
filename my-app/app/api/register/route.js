import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { User } from "@/models/user";

export async function POST(request) {
    try {
        // Destructure the required fields from the request body
        const { name, email, password } = await request.json();

        // Ensure the database connection
        await connectDB();

        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists');
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 409 } // Conflict status
            );
        } else {
            // Create a new user object with hashed password
            const newUser = new User({
                name: name,
                email: email,
                password: password
            });

            // Save the new user to the database
            await newUser.save();
            console.log("User saved successfully");

            return NextResponse.json(
                { message: 'User added successfully' },
                { status: 201 }
            );
        }
    } catch (error) {
        console.error('Error occurred while adding user:', error);
        
        return NextResponse.json(
            { message: 'Error occurred while adding user' },
            { status: 500 }
        );
    }
}
