import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mwpyorayqfyrcpclyhmk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13cHlvcmF5cWZ5cmNwY2x5aG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MTg0OTUsImV4cCI6MjA1MjA5NDQ5NX0.3tl92mwRQotJ_p95O7a2R4PKO2ecYF7_tBuUxLvJX6M';

const supabase = createClient(supabaseUrl, supabaseKey);

interface FormData {
  name: string;
  email: string;
  channelLink: string;
  message: string;
}

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
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
                toast.error("Failed to send message", {
                    position: "bottom-left",
                    duration: 4000,
                    style: {
                        backgroundColor: "#2A2A35",
                        border: "1px solid #3A3A45",
                        color: "white",
                        fontSize: "14px"
                    },
                });
            } else {
                toast.success("Message sent successfully!", {
                    position: "bottom-left",
                    duration: 4000,
                    style: {
                        backgroundColor: "#2A2A35",
                        border: "1px solid #3A3A45",
                        color: "white",
                        fontSize: "14px",
                        background: "linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))"
                    },
                    icon: "✓",
                });
                reset();
            }
        } catch (error) {
            console.error("Error sending data to Supabase", error);
            toast.error("Something went wrong", {
                position: "bottom-left",
                duration: 4000,
                style: {
                    backgroundColor: "#2A2A35",
                    border: "1px solid #3A3A45",
                    color: "white",
                    fontSize: "14px"
                },
            });
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0A0A0F] text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto bg-[#151520] rounded-2xl shadow-2xl p-8 border border-[#2A2A35]"
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            Contact Us
                        </span>
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                            <Input
                                {...register("name", { required: "Name is required" })}
                                className="w-full bg-[#1C1C28] border-[#2A2A35] text-white placeholder-gray-400"
                                placeholder="Your name"
                            />
                            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                            <Input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email"
                                className="w-full bg-[#1C1C28] border-[#2A2A35] text-white placeholder-gray-400"
                                placeholder="your@email.com"
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">YouTube Channel Link</label>
                            <Input
                                {...register("channelLink", { required: "Channel link is required" })}
                                className="w-full bg-[#1C1C28] border-[#2A2A35] text-white placeholder-gray-400"
                                placeholder="https://youtube.com/c/yourchannel"
                            />
                            {errors.channelLink && <p className="text-red-400 text-sm mt-1">{errors.channelLink.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                            <Textarea
                                {...register("message", { required: "Message is required" })}
                                className="w-full bg-[#1C1C28] border-[#2A2A35] text-white placeholder-gray-400"
                                placeholder="Your message"
                                rows={5}
                            />
                            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                        </div>

                        <p className="text-center text-gray-400">We will get back to you within 24 hours</p>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white py-3 rounded-lg transition-all duration-300"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="mb-2 text-gray-400">Or reach us directly at:</p>
                        <a href="mailto:contact@vidoro.agency" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                            contact@vidoro.agency
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;