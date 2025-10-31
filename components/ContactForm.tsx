import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [currentStep, setCurrentStep] = useState(1);

    const projectTypes = [
        'Logo Design',
        'Brand Identity',
        'Social Media Graphics',
        'Marketing Materials',
        'Web Design',
        'Other'
    ];

    const budgetRanges = [
        'Under $1,000',
        '$1,000 - $2,500',
        '$2,500 - $5,000',
        '$5,000 - $10,000',
        '$10,000+'
    ];

    const timelines = [
        'ASAP (Rush)',
        '1-2 weeks',
        '2-4 weeks',
        '1-2 months',
        'Flexible'
    ];

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Partial<FormData> = {};

        if (step === 1) {
            if (!formData.name.trim()) newErrors.name = 'Name is required';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
            if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
                newErrors.phone = 'Invalid phone format';
            }
        } else if (step === 2) {
            if (!formData.projectType) newErrors.projectType = 'Please select a project type';
            if (!formData.budget) newErrors.budget = 'Please select a budget range';
            if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 3));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'sending') return;

        if (!validateStep(currentStep)) return;

        setStatus('sending');

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        // In a real app, you'd handle success/error from the API
        setStatus('success');

        // Reset form after showing success
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                budget: '',
                timeline: '',
                message: ''
            });
            setStatus('idle');
            setCurrentStep(1);
        }, 4000);
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center flex-1">
                            <div className="flex flex-col items-center flex-1">
                                <motion.div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 ${
                                        currentStep >= step
                                            ? 'bg-brand-orange text-dark-bg'
                                            : 'bg-gray-800 text-gray-500'
                                    }`}
                                    animate={{
                                        scale: currentStep === step ? 1.1 : 1,
                                    }}
                                >
                                    {currentStep > step ? (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        step
                                    )}
                                </motion.div>
                                <span className={`text-xs mt-2 font-heading ${
                                    currentStep >= step ? 'text-brand-orange' : 'text-gray-500'
                                }`}>
                                    {step === 1 ? 'Contact' : step === 2 ? 'Project' : 'Details'}
                                </span>
                            </div>
                            {step < 3 && (
                                <div className={`h-0.5 flex-1 mx-2 transition-all duration-300 ${
                                    currentStep > step ? 'bg-brand-orange' : 'bg-gray-800'
                                }`} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="w-20 h-20 bg-brand-orange rounded-full mx-auto mb-6 flex items-center justify-center"
                        >
                            <svg className="w-12 h-12 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-4">Message Sent!</h3>
                        <p className="text-gray-400 text-lg mb-2">
                            Thanks for reaching out, <span className="text-brand-orange font-semibold">{formData.name}</span>!
                        </p>
                        <p className="text-gray-500">
                            We'll get back to you within 24 hours.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-5"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-heading text-gray-400 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                                className={`w-full bg-gray-900/50 border-2 ${
                                                    errors.name ? 'border-red-500' : 'border-gray-700/50'
                                                } focus:border-brand-orange outline-none py-3 px-4 text-white transition-all duration-300 placeholder-gray-600`}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-xs mt-1 font-heading">{errors.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-heading text-gray-400 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={(e) => handleChange('email', e.target.value)}
                                                className={`w-full bg-gray-900/50 border-2 ${
                                                    errors.email ? 'border-red-500' : 'border-gray-700/50'
                                                } focus:border-brand-orange outline-none py-3 px-4 text-white transition-all duration-300 placeholder-gray-600`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1 font-heading">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-heading text-gray-400 mb-2">
                                                Phone Number <span className="text-gray-600 text-xs">(Optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={(e) => handleChange('phone', e.target.value)}
                                                className={`w-full bg-gray-900/50 border-2 ${
                                                    errors.phone ? 'border-red-500' : 'border-gray-700/50'
                                                } focus:border-brand-orange outline-none py-3 px-4 text-white transition-all duration-300 placeholder-gray-600`}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-xs mt-1 font-heading">{errors.phone}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-heading text-gray-400 mb-2">
                                                Company <span className="text-gray-600 text-xs">(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={formData.company}
                                                onChange={(e) => handleChange('company', e.target.value)}
                                                className="w-full bg-gray-900/50 border-2 border-gray-700/50 focus:border-brand-orange outline-none py-3 px-4 text-white transition-all duration-300 placeholder-gray-600"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-5"
                                >
                                    <div>
                                        <label className="block text-sm font-heading text-gray-400 mb-3">
                                            Project Type <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {projectTypes.map((type) => (
                                                <motion.button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => handleChange('projectType', type)}
                                                    className={`py-3 px-4 font-heading text-sm transition-all duration-300 ${
                                                        formData.projectType === type
                                                            ? 'bg-brand-orange text-dark-bg border-2 border-brand-orange'
                                                            : 'bg-gray-900/50 text-gray-300 border-2 border-gray-700/50 hover:border-brand-orange/50'
                                                    }`}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {type}
                                                </motion.button>
                                            ))}
                                        </div>
                                        {errors.projectType && (
                                            <p className="text-red-500 text-xs mt-2 font-heading">{errors.projectType}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-heading text-gray-400 mb-3">
                                            Budget Range <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {budgetRanges.map((budget) => (
                                                <motion.button
                                                    key={budget}
                                                    type="button"
                                                    onClick={() => handleChange('budget', budget)}
                                                    className={`py-3 px-4 font-heading text-sm transition-all duration-300 ${
                                                        formData.budget === budget
                                                            ? 'bg-brand-orange text-dark-bg border-2 border-brand-orange'
                                                            : 'bg-gray-900/50 text-gray-300 border-2 border-gray-700/50 hover:border-brand-orange/50'
                                                    }`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {budget}
                                                </motion.button>
                                            ))}
                                        </div>
                                        {errors.budget && (
                                            <p className="text-red-500 text-xs mt-2 font-heading">{errors.budget}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-heading text-gray-400 mb-3">
                                            Timeline <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {timelines.map((timeline) => (
                                                <motion.button
                                                    key={timeline}
                                                    type="button"
                                                    onClick={() => handleChange('timeline', timeline)}
                                                    className={`py-3 px-4 font-heading text-sm transition-all duration-300 ${
                                                        formData.timeline === timeline
                                                            ? 'bg-brand-orange text-dark-bg border-2 border-brand-orange'
                                                            : 'bg-gray-900/50 text-gray-300 border-2 border-gray-700/50 hover:border-brand-orange/50'
                                                    }`}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {timeline}
                                                </motion.button>
                                            ))}
                                        </div>
                                        {errors.timeline && (
                                            <p className="text-red-500 text-xs mt-2 font-heading">{errors.timeline}</p>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-5"
                                >
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-heading text-gray-400 mb-2">
                                            Tell us about your project
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={8}
                                            value={formData.message}
                                            onChange={(e) => handleChange('message', e.target.value)}
                                            className="w-full bg-gray-900/50 border-2 border-gray-700/50 focus:border-brand-orange outline-none py-3 px-4 text-white transition-all duration-300 resize-none placeholder-gray-600"
                                            placeholder="What are your goals? Any specific requirements or ideas you'd like to share?"
                                        />
                                        <p className="text-xs text-gray-500 mt-2 font-heading">
                                            {formData.message.length} characters
                                        </p>
                                    </div>

                                    {/* Summary */}
                                    <div className="bg-gray-900/30 border border-gray-700/50 p-5 rounded">
                                        <h4 className="text-lg font-heading font-bold text-brand-orange mb-3">Quote Summary</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Contact:</span>
                                                <span className="text-white font-semibold">{formData.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Email:</span>
                                                <span className="text-white">{formData.email}</span>
                                            </div>
                                            {formData.company && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Company:</span>
                                                    <span className="text-white">{formData.company}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Project:</span>
                                                <span className="text-brand-orange font-semibold">{formData.projectType}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Budget:</span>
                                                <span className="text-white">{formData.budget}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Timeline:</span>
                                                <span className="text-white">{formData.timeline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="mt-8 flex gap-4">
                            {currentStep > 1 && (
                                <motion.button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-800 text-white px-6 py-4 font-bold font-heading hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </motion.button>
                            )}
                            {currentStep < 3 ? (
                                <motion.button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 bg-brand-orange text-dark-bg px-6 py-4 font-bold font-heading hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Next
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            ) : (
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="flex-1 bg-brand-orange text-dark-bg px-6 py-4 font-bold font-heading hover:bg-green-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                                    whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Submit Quote Request
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </>
                                    )}
                                </motion.button>
                            )}
                        </div>
                    </form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;