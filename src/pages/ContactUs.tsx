import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { createClient } from '@supabase/supabase-js';

// Supabase project URL and anon key
const supabaseUrl = 'https://mwpyorayqfyrcpclyhmk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13cHlvcmF5cWZ5cmNwY2x5aG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MTg0OTUsImV4cCI6MjA1MjA5NDQ5NX0.3tl92mwRQotJ_p95O7a2R4PKO2ecYF7_tBuUxLvJX6M';

const supabase = createClient(supabaseUrl, supabaseKey);

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const { error } = await supabase
                .from('contacts')
                .insert([{
                    name: data.name,
                    email: data.email,
                    channelLink: data.channelLink,
                    message: data.message,
                    created_at: new Date().toISOString()
                }])

            if (error) {
                console.error("Error inserting data to supabase", error);
                toast.error("Failed to send message");
            } else {
                toast.success("Message sent successfully!");
                reset();
            }
        } catch (error) {
            console.error("Error sending data to Supabase", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-8"
                >
                    <h1 className="text-4xl font-bold mb-8 text-center text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
                            Contact Us
                        </span>
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <Input
                                {...register("name", { required: "Name is required" })}
                                className="w-full text-gray-800"
                                placeholder="Your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <Input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email"
                                className="w-full text-gray-800"
                                placeholder="your@email.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">YouTube Channel Link</label>
                            <Input
                                {...register("channelLink", { required: "Channel link is required" })}
                                className="w-full text-gray-800"
                                placeholder="https://youtube.com/c/yourchannel"
                            />
                            {errors.channelLink && <p className="text-red-500 text-sm mt-1">{errors.channelLink.message as string}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <Textarea
                                {...register("message", { required: "Message is required" })}
                                className="w-full text-gray-800"
                                placeholder=""
                                rows={5}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
                        </div>
                        <p className="text-center text-gray-400 mb-4">We will get back to you within 24 hours</p>
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                        >
                            Submit
                        </Button>
                    </form>

                    <div className="mt-12 text-center text-gray-400">
                        <p className="mb-2">Or reach us directly at:</p>
                        <a href="mailto:contact@vidoro.agency" className="text-blue-500 hover:text-blue-700">
                            contact@vidoro.agency
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;