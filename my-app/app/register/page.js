'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { IconBrandGithub ,IconBrandGoogle} from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import { POST } from '../api/register/route'
const page = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handlePassworsd = (e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit =async(e)=>{
        e.preventDefault()
        console.log(name,email,password)
        try{
            const res = await fetch('/api/register',{
                method : 'POST',
                headers:{
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify({ name, email, password }),

            })

            if(res.status === 200){
                console.log("success")
            }
            else{
                console.log("failed")
            }
        }catch(e){
            console.log("error occured")
        }
        setEmail("")
        setName("")
        setPassword("")
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700">Name</Label>
            <Input
              placeholder="Enter your name" value={name} onChange = {handleName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700">Email</Label>
            <Input
              placeholder="Enter your email" value={email} onChange={handleEmail}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700">Password</Label>
            <Input
              type="password" value ={password} onChange={handlePassworsd}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <Button  className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Submit
          </Button>
          <p className='pt-5'>Already have a account?  <Link href="/login" className='underline'>Login</Link></p>

          <button className='flex font-bold mt-5'><IconBrandGithub/><p>GitHub</p></button>
          <button className='flex font-bold mt-2'><IconBrandGoogle/><p>Google</p></button>
        </form>
      </div>
    </div>
  )
}

export default page
