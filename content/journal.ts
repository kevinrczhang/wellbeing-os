/**
 * YOUR CONTENT LIVES HERE.
 * Replace the prompts with your own experiences. The supplied photographs are
 * illustrative Unsplash images, never presented as personal photographs.
 * Store replacements in public/images and update the image/alt/caption fields.
 */
export type JournalId = "connections" | "purpose" | "recovery" | "environment";
export type AppId = JournalId | "monitor" | "summary" | "about";

export const applications: { id: JournalId | "monitor"; number: string; name: string; subtitle: string }[] = [
  { id: "connections", number: "01", name: "Connections", subtitle: "People, not notifications." },
  { id: "purpose", number: "02", name: "Purpose", subtitle: "Something to move toward." },
  { id: "recovery", number: "03", name: "Recovery", subtitle: "Permission to pause." },
  { id: "environment", number: "04", name: "Environment", subtitle: "Room to feel like yourself." },
  { id: "monitor", number: "05", name: "System Monitor", subtitle: "See how it all connects." },
];

export const journal: Record<JournalId, {
  eyebrow: string; title: string; intro: string; image: string; alt: string;
  caption: string; reflection: string; question: string; note: string;
}> = {
  connections: {
    eyebrow: "01 / PEOPLE & BELONGING",
    title: "The time that counts.",
    intro: "A full calendar doesn't always mean a connected life. Being with someone, without needing to accomplish anything, has its own kind of value.",
    image: "/images/connections.jpg",
    alt: "Illustrative photograph of people sharing time outdoors",
    caption: "PHOTO PLACEHOLDER / A moment with your people",
    reflection: "Describe a small moment when someone made you feel understood. Who was there? What did their presence make possible that you couldn't have found alone?",
    question: "Who do you stop making time for when life gets busy?",
    note: "Connection needs time. In the System Monitor, notice what happens to it when workload takes over.",
  },
  purpose: {
    eyebrow: "02 / DIRECTION & MEANING",
    title: "More than getting there.",
    intro: "Having something to work toward can give a day its shape. But a goal can become a moving target, and achievement doesn't automatically tell us how we're doing.",
    image: "/images/purpose.jpg",
    alt: "Illustrative photograph of a notebook and a pen on a desk",
    caption: "PHOTO PLACEHOLDER / Something you are learning or building",
    reflection: "Recall a goal that mattered to you. What made the process fulfilling? Describe a time when achievement and feeling well didn't happen together.",
    question: "Would this still matter if nobody else saw the result?",
    note: "Purpose can grow with effort. Beyond a point, pressure can leave less room to enjoy what the effort is for.",
  },
  recovery: {
    eyebrow: "03 / REST & RENEWAL",
    title: "You can put it down.",
    intro: "A quiet afternoon. A hobby without an outcome. Time that doesn't have to prove its usefulness. Recovery makes space for a life beyond responsibilities.",
    image: "/images/recovery.jpg",
    alt: "Illustrative photograph of sunlight reaching a quiet forest floor",
    caption: "PHOTO PLACEHOLDER / A place or activity that helps you rest",
    reflection: "What actually restores you, rather than simply distracting you? Describe what makes slowing down difficult and a sign that you need to pause.",
    question: "When did rest start feeling like something to earn?",
    note: "Try the rest control below. A pause won't remove every responsibility, but it changes the resources you have to meet them.",
  },
  environment: {
    eyebrow: "04 / PLACE & PERSPECTIVE",
    title: "A little room to breathe.",
    intro: "The places around us are part of how we feel. Light, noise, nature, safety, and access to shared spaces all shape the room we have to be well.",
    image: "/images/environment.jpg",
    alt: "Illustrative photograph of a still lake with mountains and trees reflected in the water",
    caption: "PHOTO PLACEHOLDER / Somewhere that changes how you feel",
    reflection: "Choose a place that affects your wellbeing. What changes when you're there? Reflect on how money, transport, accessibility, community, or housing shape your access to it.",
    question: "What does this place give you that your everyday routine doesn't?",
    note: "Wellbeing isn't only an individual task. Our surroundings and the resources available to us influence what's possible.",
  },
};

// Replace these three prompts with your own meaningful moments.
export const timeline = [
  { label: "A beginning", title: "Something worth trying", prompt: "Add a moment when curiosity gave you direction." },
  { label: "A turning point", title: "When enough wasn't enough", prompt: "Add a time when success came with a cost." },
  { label: "An ongoing practice", title: "Redefining progress", prompt: "Add what a sustainable goal looks like for you now." },
];

/** Editable project description, approximately 250 words. Personalize before submission. */
export const projectDescription = [
  "Wellbeing OS uses the familiar language of a computer operating system to explore a less measurable question: what does it mean to be well? Its starting point is that a system can be productive without being healthy. Completed tasks reveal only one part of a life.",
  "Five applications make this idea visible. Connections creates space to reflect on belonging and the relationships that can disappear from view during busy periods. Purpose considers the meaning found in learning and working toward goals, alongside the pressure that ambition can create. Recovery treats rest as a necessary resource rather than a reward. Environment widens the frame to include place, community, and the conditions that make wellbeing more or less accessible.",
  "The System Monitor connects these themes. As visitors increase the workload, productivity initially rises, while connection and recovery eventually decline. These fictional values are a visual metaphor, not a health assessment. The interaction asks visitors to notice a tradeoff that a conventional productivity tool might overlook.",
  "Overlapping windows suggest that these parts of life coexist and compete for attention. Restrained colour, familiar controls, and quiet photographs invite exploration without demanding constant stimulation. The concluding summary brings the applications together around care rather than maximum performance.",
  "To make this project personally authentic, I will replace the marked reflection prompts and sample photographs with my own experiences, including a moment of connection, a goal that brought both meaning and pressure, a restorative activity, and a place shaped by broader circumstances. These details will show how I recognise the difference between struggling and thriving.",
];

// Add only references actually used; format them in APA 7.
export const references: string[] = [];
