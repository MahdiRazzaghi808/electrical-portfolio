"use client";

import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
    {
        question: "What are your main areas of expertise in electrical engineering?",
        answer:
            "My expertise includes electronic circuit design, power system analysis, and industrial automation.",
    },
    {
        question: "Can you describe some of the major projects you've worked on?",
        answer:
            "I have worked on projects such as industrial control system design, electrical panel installation, and solar energy systems implementation.",
    },
    {
        question: "Do you have experience designing electronic circuits?",
        answer:
            "Yes, I have designed both analog and digital circuits using tools like Altium Designer and Multisim.",
    },
    {
        question: "Which engineering software tools are you proficient in?",
        answer:
            "I am proficient in Altium Designer, MATLAB, Simulink, AutoCAD Electrical, and various circuit simulation tools.",
    },
    {
        question: "How do you approach solving technical problems on projects?",
        answer:
            "I analyze the problem systematically, consult technical documentation, collaborate with team members, and prototype solutions when necessary.",
    },
    {
        question: "Do you have experience in industrial automation?",
        answer:
            "Yes, I have worked with PLC programming, SCADA systems, and automation of manufacturing processes.",
    },
    {
        question: "What certifications or specialized courses have you completed?",
        answer:
            "I hold certifications in PLC programming, power system protection, and have completed courses on renewable energy technologies.",
    },
    {
        question: "How do you stay up-to-date with advances in electrical engineering?",
        answer:
            "I follow industry publications, attend webinars and conferences, and continuously take online courses to update my skills.",
    },
    {
        question: "Have you worked in collaborative, team-based projects?",
        answer:
            "Yes, I have collaborated with cross-functional teams in multi-disciplinary projects to deliver complex engineering solutions.",
    },
    {
        question: "Which programming languages related to electrical engineering are you familiar with?",
        answer:
            "I am familiar with Python, C, and Ladder Logic programming for embedded and control systems.",
    },
];

export default function FAQ() {
    return (
        <div className="container mx-auto p-6 bg-white rounded-md shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">FAQ</h2>
            <Accordion.Root
                type="multiple"
                defaultValue={["item-1"]}
                className="w-full mb-12 mx-auto rounded-md bg-white p-6"
            >
                {faqs.map(({ question, answer }, index) => (
                    <Accordion.Item
                        key={index}
                        value={`item-${index + 1}`}
                        className="border-b border-gray-200 last:border-none"
                    >
                        <Accordion.Header>
                            <Accordion.Trigger className="flex w-full justify-between py-4 text-lg font-semibold text-gray-900 hover:text-blue-600">
                                {question}
                                <span className="text-blue-600">+</span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="overflow-hidden text-gray-700 px-5 pb-5 text-base">
                            {answer}
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>

    );
}
