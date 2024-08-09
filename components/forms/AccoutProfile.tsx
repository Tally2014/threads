"use client"

import React from 'react'
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import * as z from "zod";

interface Props {
  user:{
    id:string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

export default function AccoutProfile({user, btnTitle}: Props) {

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues:{
      profile_photo:"",
      name:"",
      username:"",
      bio:"",
    }
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) =>{
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col justify-start gap-10'>
        <FormField control={form.control} name="username" render={({field}) => (
          <FormItem>
            <FormLabel className='text-base-semibold text-light-2'>Username</FormLabel>
            <FormControl className='flex-1 text-base-semibold text-gray-200'>
              <Input placeholder='shadcn' {...field}/>
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
          </FormItem>
        )}>
          
        </FormField>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
