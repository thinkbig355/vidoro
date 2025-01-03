import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`https://script.google.com/macros/s/16Er80Lf58jjOMD8YZylVg7jhG36mU823-LBHNgDOyNg/exec`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <Input
                {...register("name", { required: "Name is required" })}
                className="w-full"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                className="w-full"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Channel Link</label>
              <Input
                {...register("channelLink", { required: "Channel link is required" })}
                className="w-full"
                placeholder="https://youtube.com/c/yourchannel"
              />
              {errors.channelLink && <p className="text-red-500 text-sm mt-1">{errors.channelLink.message as string}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <Textarea
                {...register("message", { required: "Message is required" })}
                className="w-full"
                placeholder="Tell us about your project"
                rows={5}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-12 text-center text-gray-600">
            <p className="mb-2">Or reach us directly at:</p>
            <a href="mailto:contact@vidoro.agency" className="text-red-600 hover:text-red-700">
              contact@vidoro.agency
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;