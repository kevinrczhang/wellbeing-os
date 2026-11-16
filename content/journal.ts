/** Personal reflections supplied by the author. */
export type JournalId = "connections" | "purpose" | "recovery" | "environment";

export type JournalEntry = {
  id: JournalId;
  number: string;
  name: string;
  title: string;
  personalReflection: string;
};

export const journal: JournalEntry[] = [
  {
    "id": "connections",
    "number": "01",
    "name": "Connection",
    "title": "Time with people who matter.",
    "personalReflection": "When I'm overwhelmed by school or other responsibilities, spending time with my partner and friends helps me feel supported. Being able to talk about things unrelated to academics reminds me that my value isn't determined by my accomplishments.\n\nI try to return that care by listening, making time for others, and supporting them when they're going through difficult periods.\n\nHowever, when I get busy, relationships are often the first thing I accidentally forget about. I’d always tell myself I'll spend more time with people once I get less busy, but there's always going to be another deadline. I've learned that meaningful relationships require consistent attention."
  },
  {
    "id": "purpose",
    "number": "02",
    "name": "Purpose",
    "title": "Something meaningful to work toward.",
    "personalReflection": "Learning new things and challenging myself academically gives me a sense of purpose. I enjoy solving difficult problems or learning new technical skills, and seeing myself improve over time.\n\nHowever, pursuing academic and career goals can also create quite a lot of stress for me. Sometimes I become so focused on the next exam, assignment, or opportunity that I forget to appreciate what I've already accomplished.\n\nI've come to realize that progress is really all about genuinely understanding what I'm learning, enjoying the process, and growing as a person rather than constantly chasing the next big thing."
  },
  {
    "id": "recovery",
    "number": "03",
    "name": "Recovery",
    "title": "Room to rest and enjoy a day.",
    "personalReflection": "Spending time outdoors, particularly walking through Vancouver's forests, helps me disconnect from academic responsibilities.\n\nBefore taking a break, my mind is often occupied by deadlines and unfinished tasks. Being outside allows me to focus on my surroundings rather than my to-do list. Afterward, I usually feel calmer and more mentally refreshed.\n\nSlowing down can be difficult because I'm accustomed to measuring my days by productivity. Sometimes resting feels like wasting time.\n\nFor me, the difference between recovery and avoidance is how I feel afterward. Rest helps me return to my responsibilities with more energy and perspective, whereas avoidance often leaves me more anxious and thinking about how I could’ve used that time to get more things done."
  },
  {
    "id": "environment",
    "number": "04",
    "name": "Environment",
    "title": "A place with room to breathe.",
    "personalReflection": "Vancouver's natural environment, particularly places like Pacific Spirit Park, offers a contrast to my everyday routine of studying and spending time indoors.\n\nBeing surrounded by trees and nature grounds me into the powerful feeling of now. It reminds me that there's more to life than mental constructs like academic responsibilities.\n\nAccess to these spaces depends on having free time, transportation, and nearby public green spaces. I recognize that not everyone has equal access to these opportunities."
  }
];

export const wellbeingSignals = {
  "well": [
    "I genuinely enjoy what I'm learning rather than simply trying to finish assignments.",
    "I have enough time and energy to spend with people I care about.",
    "I can relax without constantly worrying about unfinished responsibilities."
  ],
  "struggling": [
    "I feel guilty whenever I'm not being productive.",
    "I lose interest in activities I normally enjoy.",
    "I sacrifice sleep, relationships, or personal time to complete more work."
  ],
  "personalReflection": "Balancing multiple university courses and preparing for my future career has sometimes meant accomplishing a lot while feeling mentally exhausted.\n\nFrom the outside, I appeared productive, but internally my focus was so divided that I wasn’t really learning anymore nor enjoying what I was doing.\n\nInitially, I interpreted finishing tasks as evidence that I was doing well. What I overlooked was that productivity doesn't necessarily reflect someone's mental and emotional wellbeing.\n\nNow, I try to pay attention to whether I feel fulfilled, rested, and connected to others rather than judging my wellbeing purely through accomplishments."
};

export const widerConnections = [
  {
    "name": "Other people",
    "title": "Care moves in both directions.",
    "text": "My partner and friends remind me that my value isn't determined by my accomplishments. I try to return that care by listening, making time for others, and supporting them through difficult periods."
  },
  {
    "name": "Community",
    "title": "Our surroundings shape what is possible.",
    "text": "My wellbeing is influenced by the competitive academic environment around me and by access to shared public green spaces. Free time, transportation, and nearby parks make a difference, and not everyone has equal access to these opportunities."
  },
  {
    "name": "The earth",
    "title": "The natural world brings me into the present.",
    "text": "Walking through Vancouver's forests helps me focus on my surroundings instead of my to-do list. Places like Pacific Spirit Park remind me that there is more to life than academic responsibilities."
  }
];

export const contextReflection = {
  "personalReflection": "One major influence on my wellbeing is the competitive academic environment surrounding university and the technology industry.\n\nThere's considerable emphasis on securing internships, maintaining strong grades, and preparing for successful careers.\n\nFor example, hearing about other students' accomplishments can sometimes create pressure to compare my progress with theirs, even when I'm satisfied with my own direction.\n\nThese expectations can motivate me, but they can also make accomplishments feel temporary because there's always another goal to achieve.\n\nI try to respond by evaluating my choices based on what genuinely matters to me rather than what appears impressive to others.\n\nWhile I can control my priorities and how I respond to comparison, broader pressures created by academic institutions, hiring practices, and economic uncertainty also influence students' wellbeing."
};

export const changedUnderstanding = {
  "personalReflection": "Previously, I judged how well I was doing through academic performance, career opportunities, and personal achievements.\n\nBeing surrounded by ambitious students reinforced this mindset. There always seemed to be another goal to pursue or another opportunity to prepare for.\n\nHowever, experiencing periods where I was academically productive but mentally exhausted started to change that understanding.\n\nI've realized that wellbeing isn't something I automatically achieve after accomplishing a goal. Instead, it comes from my relationships, emotional energy, enjoyment of everyday experiences, and ability to rest.\n\nI still value ambition and personal growth, but I no longer believe achievement alone determines whether I'm doing well."
};

export const projectDescription = [
  "I created Wellbeing OS because I often approach my life like a computer system: constantly trying to improve performance, complete tasks, and optimize my time. However, I've realized that a system can still perform without actually being healthy.",
  "The website represents wellbeing through four themes: connection, purpose, recovery, and environment.",
  "Connection represents the relationships that remind me I'm valued beyond my accomplishments. Purpose reflects the fulfillment I experience through learning and personal growth, but also the pressure that comes with academic ambition. Recovery represents the importance of taking breaks without guilt, while environment explores how natural spaces and the communities around me influence how I feel.",
  "Each section uses personal reflections and interactive elements to communicate these experiences.",
  "The central interactive feature is the System Monitor, where visitors adjust a workload slider and observe how increasing productivity can eventually negatively affect recovery, relationships, and overall wellbeing. I created this as a metaphor that shows how everything is a tradeoff.",
  "I chose this interaction because it captures an important change in my understanding of wellbeing. I previously measured success primarily through academic and career achievements, but I've learned that accomplishment alone doesn't guarantee happiness or fulfillment.",
  "Ultimately, I want readers to understand that wellbeing is about maintaining a balance that allows us to enjoy the lives we're working so hard to build."
];

export const references: string[] = [];
