import React from 'react'
import Macwindow from '../Macwindow/Macwindow'
import Terminal from 'react-console-emulator';
import './cli.scss'

const cli = () => {
    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        about: {
            description: 'who I am',
            fn: () => {
                return (
                    "Hi there! I'm Siddharth Jhingran, a passionate web developer " +
                    "who loves building sleek, responsive user interfaces " +
                    "with React and modern web technologies.\n"
                );
            }
        },
        skills: {
            description: 'my technical skills',
            fn: () => {
                return (
                    "Languages: JavaScript (ES6+), HTML5, CSS3\n" +
                    "Frameworks/Libraries: React, Vite, Sass\n" +
                    "Tools: Git, VS Code, Chrome DevTools\n"
                );
            }
        },
        projects: {
            description: 'my projects',
            fn: () => {
                return (
                    "• Portfolio Website - this interactive CLI you're using!\n" +
                    "• Spotify Clone - music app with React hooks\n" +
                    "• Notepad App - a lightweight note-taking tool\n"
                );
            }
        },
        contact: {
            description: 'how to get in touch',
            fn: () => {
                return (
                    "Email: your.email@example.com\n" +
                    "LinkedIn: https://www.linkedin.com/in/yourprofile\n" +
                    "GitHub: https://github.com/yourusername\n"
                );
            }
        },
        // clear: {
        //     description: 'clear the terminal window',
        //     fn: () => {
        //         // some terminal components support returning an empty string to clear
        //         return "";
        //     }
        // }
    }

    return (
        <Macwindow>
            <Terminal
                commands={commands}
                welcomeMessage={
                    `╔══════════════════════════════════════════════════════╗\n` +
                    `║ 🚀 Welcome to Siddharth Jhingran's Portfolio CLI 🚀 ║\n` +
                    `╚══════════════════════════════════════════════════════╝\n` +
                    `Type 'help' to see available commands.\n\n` +
                    `Commands: help, about, skills, projects, contact, clear\n` +
                    `Have fun exploring! 💡`
                }
                promptLabel="siddharth@portfolio:~$"
                promptLabelStyle={{ color: "rgb(203, 61, 216)" }}
                inputTextStyle={{ color: "rgb(67, 187, 67) " }}
                messageStyle={{ color: "white" }}
                contentStyle={{ color: "yellow" }}
                skillsStyle={{ color: "red" }}
            />
        </Macwindow>
    )
}

export default cli