import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F1FAF3] to-[#FFFFFF] text-green-800 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src='/logo.svg'/>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Create, edit and download professional resumes with AI-powered assistance.--This is a demo project.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="#">Resume</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
  )
}

export default Footer