/**
 * EDIT YOUR PROJECT HERE.
 * Replace each personalReflection: null with your own reflection and replace
 * sample photographs in public/images. Do not present a prompt as a life event.
 * The other writing describes the project's ideas, not an invented biography.
 */
export type JournalId = "connections" | "purpose" | "recovery" | "environment";
export type AppId = JournalId | "monitor" | "summary" | "about";

export const journal: {
  id: JournalId; number: string; name: string; title: string; meaning: string;
  image: string; alt: string; imageIsPersonal: boolean; caption: string;
  personalReflection: string | null; prompt: string;
}[] = [
  {
    id: "connections", number: "01", name: "Connection",
    title: "Time with people who matter.",
    meaning: "Belonging offers something achievement cannot: the chance to be valued without having to produce a result. Making room for others also means listening, showing up, and recognising that care goes both ways.",
    image: "/images/connections.jpg", alt: "Sample photograph of people sharing time outdoors", imageIsPersonal: false,
    caption: "A moment of being together, without an agenda.", personalReflection: null,
    prompt: "Add a specific moment when someone helped you feel understood. Explain why it mattered, how you offered care in return, and what happens to this relationship when you get busy.",
  },
  {
    id: "purpose", number: "02", name: "Purpose",
    title: "Something meaningful to work toward.",
    meaning: "Learning and making progress can bring direction. The tension is that a meaningful goal can also become pressure. A finished task says something about output; it does not say everything about the person doing it.",
    image: "/images/purpose.jpg", alt: "Sample photograph of writing materials on a desk", imageIsPersonal: false,
    caption: "Progress can be meaningful without filling every hour.", personalReflection: null,
    prompt: "Add a goal or learning experience that mattered to you. Describe both its fulfilment and its cost. What helped you distinguish meaningful progress from pressure to keep achieving?",
  },
  {
    id: "recovery", number: "03", name: "Recovery",
    title: "Room to rest and enjoy a day.",
    meaning: "Rest, hobbies, and unstructured time make room for a life beyond responsibilities. Recovery matters in its own right, as well as making attention and patience available for other parts of life.",
    image: "/images/recovery.jpg", alt: "Sample photograph of sunlight entering a quiet forest", imageIsPersonal: false,
    caption: "Time that does not have to justify itself.", personalReflection: null,
    prompt: "Add an activity that restores you. Describe how you feel before and after it, why pausing can be difficult, and how you recognise the difference between restoration and simply avoiding a responsibility.",
  },
  {
    id: "environment", number: "04", name: "Environment",
    title: "A place with room to breathe.",
    meaning: "Light, noise, safety, shared spaces, and access to nature influence the possibilities for feeling well. Enjoying a place also raises a question about responsibility: how can care for a place extend beyond the person visiting it?",
    image: "/images/environment.jpg", alt: "Sample photograph of a mountain lake and its reflection", imageIsPersonal: false,
    caption: "A reminder that wellbeing has a setting.", personalReflection: null,
    prompt: "Add a place that changes how you feel. Explain what it gives you, who or what makes access possible, and one way you care for that place or the life it supports.",
  },
];

/** Possible reflection cues, not claims about your actual symptoms. */
export const wellbeingSignals = {
  well: [
    "There is room for people alongside responsibilities.",
    "Rest and enjoyable activities have a place in the week.",
    "Work feels connected to something meaningful.",
  ],
  struggling: [
    "Tasks keep getting done while everything else gets postponed.",
    "Time with others feels like another demand to fit in.",
    "Pausing feels difficult, even when recovery is needed.",
  ],
  personalReflection: null as string | null,
  prompt: "Which of these cues actually fits you? Replace the examples with your own signs. Describe a time you looked productive but were struggling, what you initially missed, and what you would notice or do differently now.",
};

export const widerConnections = [
  { name: "Other people", title: "Care moves in both directions.", text: "Support can make room to cope, but the people offering it have needs too. Shared wellbeing involves listening, respecting boundaries, and making space for reciprocity." },
  { name: "Community", title: "Belonging needs places and people.", text: "Accessible shared spaces, mutual support, and opportunities to participate can make wellbeing more possible. These resources are shaped by collective decisions, not only individual habits." },
  { name: "The earth", title: "The places that sustain us need care.", text: "Time outdoors can invite attention to the living world. The connection also asks for responsibility toward shared land, water, and the conditions that sustain other lives." },
];

export const broaderContexts = [
  { context: "Study & work expectations", influence: "Deadlines and institutional ideas about success can shape how much time feels available for rest and relationships.", response: "Reflect on an expectation that affects you. What can you adjust, and what would require support or a change beyond you?" },
  { context: "Money, time & access", influence: "A safe home, free time, transport, and access to shared spaces influence which wellbeing practices are realistic.", response: "Identify an opportunity or constraint in your life. Describe a realistic response without assuming everyone has the same resources." },
  { context: "Culture & belonging", influence: "Ideas about independence, responsibility, rest, and achievement can influence what feels acceptable or valuable.", response: "Choose an influence that actually applies to you. What do you want to carry forward, question, or understand differently?" },
];

export const contextReflection = {
  personalReflection: null as string | null,
  prompt: "Choose one context above that affects your life. Describe a concrete example, how it shapes your wellbeing or another person's, and your response. Acknowledge what is outside your control as well as what you can change.",
};

export const changedUnderstanding = {
  personalReflection: null as string | null,
  prompt: "Finish this thought with your own experience: ‘I used to judge how I was doing by ____. An experience that complicated this was ____. Now I pay attention to ____, because ____.’",
};

/** Supporting description: 200–300 words, editable and clearly marked as a draft. */
export const projectDescription = [
  "Wellbeing OS represents wellbeing as the room available for a meaningful life. Its central idea is that a system can be productive without being healthy. I use the language of an operating system to question the assumption that completing more tasks necessarily means doing well.",
  "The photo journal brings together four parts of this idea: connection, purpose, recovery, and environment. Relationships represent belonging and reciprocal care. Purpose represents the fulfilment of learning and working toward something meaningful, while acknowledging the pressure that ambition can create. Recovery gives rest and enjoyment a place alongside responsibility. Environment draws attention to the places and living systems that support wellbeing.",
  "The interactive workload experiment makes their interdependence visible. Increasing the workload initially supports productivity, but eventually leaves less room for connection and recovery. Its fictional values are a creative metaphor, not a health assessment. The important moment is noticing that an apparently successful system can still be struggling.",
  "A section on personal signals asks how wellbeing is recognised in everyday life. Another widens the view to community, culture, institutional expectations, and access to resources. Together, these sections challenge the idea that wellbeing depends only on individual effort.",
  "The simple reading order, restrained colours, and linked resource bars are deliberate creative choices. They invite attention to relationships between the parts rather than competition for the highest score. The marked spaces for personal experiences and photographs must still be completed to connect this interpretation to my own life. The concluding message is that care, meaning, and sustainable participation matter alongside achievement.",
];

// Add only sources actually used. Format them in APA 7 when required.
export const references: string[] = [];
