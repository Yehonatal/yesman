#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

program
    .name("yesman")
    .description('A simple CLI tool that answers questions with "Yes"')
    .version("1.0.0")
    .argument("<question>", "The question you want to ask")
    .action((question) => {
        console.log(
            `So, your question is '${question}' right? And let me tell you something: Yes, you are! tbh you're are the best at it:) `
        );
    })
    .helpOption("-h, --help", "Display help for command");

program.parse(process.argv);
