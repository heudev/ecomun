import React from 'react';

const faqItems = [
    {
        question: "I am minor (under the age 18). Can I attend the conference as a delegate on my own?",
        answer: "Yes. Participants under 18 can attend the conference on their own if they have their parent or guardian sign the consent form we provide and submit the signed hard copy to the designated team member."
    },
    {
        question: "I have never attended an MUN conference before, but I am very interested. Can I join ECOMUN?",
        answer: "Of course! Our conference offers beginner-level committees for new participants, as well as various roles such as admin or press in the organizing team. It is important for participants applying as delegates to indicate that they are first-timers in their applications, as this will be taken into account by our academic team for committee-country allocations."
    },
    {
        question: "We want to apply as a delegation. What is the minimum number of people required?",
        answer: "Delegations must consist of at least 5 people."
    },
    {
        question: "We want to participate as a delegation, but we don’t have an advisor. Can we still apply?",
        answer: "Of course! However, delegations without an advisor must designate a head delegate, as this is important for communication throughout the process leading up to the conference. During the conference, head delegates will also be responsible for other members of the delegation, similar to advisors."
    },
    {
        question: "How long do I have to make the payment after receiving the confirmation email?",
        answer: "Individual participants (delegate, admin, press, chairboard, ctm) must make their payment within 3 business days, while delegations have 5 business days to transfer the amount to the IBAN provided in the email as instructed."
    },
    {
        question: "What do students do in Model United Nations?",
        answer: "Students prepare on their countries policies, then proceed on debating with member countries on topics & agenda items that is given. To debate, delegates prepare working papers on agenda items with their countries policies aligned."
    },
    {
        question: "Never participated in MUN, what should I expect?",
        answer: "Public speaking, friendly debates, wild goose chases and most importantly life long skills. Everybody in their first MUN got anxious maybe even scared but with MUN getting rid of these fears and anxieties by sharing an experience with everyone makes MUN the best place to be. Worldwide politics, geo-politics, earths future problems and more are going to be in your hand. What we need is, you to change the world."
    },
    {
        question: "What is Model United Nations?",
        answer: "From the United Nations itself; “Model UN simulations engage hundreds of thousands of students each year, helping them to learn more about the principles of the UN and how it functions. Many of today’s leaders in law, government, business and the arts – including at the UN itself – participated in Model UN as students.’’"
    },
    {
        question: "What are the Roles in Model United Nations?",
        answer: "Delegate: Delegate is the one who represents the country. Delegates are assigned a country by secretariat before the conference starts. Delegates works on their countries policies and debate on the agenda items. Chair (President & Deputy): Chair, also known as chairboard is the one who controls and observes the order in the committee sessions. Chairs are also the ones who will give you hints and advices about what to do and not to do during conference. Rapporteur: Rapporteur, takes notes of the given motions , counts during votings and helps chairboard members in their absence. Under Secretary General: Also known as USG is the one who readies up the study guide, country matrix and if needed a procedure to put in order during committee sessions. Academic Assistant: Academic assistants are the helpers of the Under Secretary Generals, finding sources to support the study guides, finding relevant countries whose policy is important on the matter agenda items that will be discussed."
    },
    {
        question: "What is best for me?",
        answer: "That’s a question you should answer but we can maybe reflect some light on the matter. What do you like to do or most importantly what do you think pushed the world off balance and now it slides on left and right. Maybe weather, maybe wars or conflicts, maybe the politics that tears apart the little bit of a cooperation countries had. Think about the problems of this world or don’t go that far and think about your countries problems or even yours. If you had a magical wand and you could have solved one of those problems , which one would you choose?"
    }
];

export default function Faq() {
    return (
        <div className='md:w-2/3 p-3 mx-auto space-y-8' id='faq'>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center text-white">
                Frequently Asked Questions
            </h1>
            <div className='space-y-3'>
                {faqItems.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow bg-[rgba(66,38,112,0.8)] text-white">
                        <input type="checkbox" name="my-accordion-2" />
                        <div className="collapse-title font-bold">{item.question}</div>
                        <div className="collapse-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
