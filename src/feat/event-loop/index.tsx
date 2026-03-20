import Block, { BlockProps } from "@/my-components/Block";

const EventLoopContainer = () => {
  const eventLoopContent: BlockProps[] = [
    {
      heading: "What is Event Loop?",
      mainDesc: [
        "Event Loop ek mechanism hai jo JavaScript ko async tasks handle karne me help karta hai.",
        "JavaScript single-threaded hone ke bawajood multiple tasks efficiently manage karta hai using Event Loop.",
        "Yeh decide karta hai kaunsa task kab execute hoga.",
      ],
      pointer: {
        title: "Key Points",
        point: [
          "JavaScript is single-threaded",
          "Event Loop manages execution order",
          "Works with Call Stack, Web APIs, and Queues",
        ],
        moral: ["Event Loop ke bina async JavaScript possible nahi hota"],
      },
    },

    {
      heading: "Call Stack",
      mainDesc: [
        "Call Stack ek data structure hai jaha functions execute hote hain.",
        "Jo function call hota hai wo stack me push hota hai aur complete hone ke baad pop hota hai.",
      ],
      pointer: {
        title: "Understanding",
        point: [
          "FILO (First In Last Out) structure follow karta hai",
          "Ek time pe ek hi function run hota hai",
        ],
        moral: ["Call Stack JS execution ka core hai"],
      },
    },

    {
      heading: "Web APIs",
      mainDesc: [
        "Web APIs browser ke features hote hain jo async tasks handle karte hain.",
        "Jaise setTimeout, fetch API, DOM events etc.",
      ],
      pointer: {
        title: "Examples",
        point: ["setTimeout", "fetch API", "DOM Events (click, scroll)"],
        moral: ["Async kaam JS nahi, browser handle karta hai"],
      },
    },

    {
      heading: "Callback Queue (Task Queue)",
      mainDesc: [
        "Jab async task complete hota hai to uska callback callback queue me jata hai.",
        "Event Loop is queue ko check karta hai jab call stack empty hota hai.",
      ],
      pointer: {
        title: "Flow",
        point: [
          "Async task complete",
          "Callback queue me add",
          "Call stack empty hone ka wait",
        ],
        moral: ["Callback queue normal priority tasks ke liye hoti hai"],
      },
    },

    {
      heading: "Microtask Queue",
      mainDesc: [
        "Microtask queue high priority queue hoti hai.",
        "Promises ke callbacks yaha store hote hain.",
      ],
      pointer: {
        title: "Important",
        point: [
          "Promises always run before setTimeout",
          "High priority execution",
        ],
        moral: ["Microtasks > Callback Queue in priority"],
      },
    },

    {
      heading: "Event Loop Working",
      mainDesc: [
        "Event Loop continuously check karta hai ki call stack empty hai ya nahi.",
        "Agar empty hai to pehle microtask queue execute hoti hai, phir callback queue.",
      ],
      pointer: {
        title: "Execution Order",
        point: [
          "Call Stack execute hota hai",
          "Microtask queue run hoti hai",
          "Callback queue run hoti hai",
        ],
        moral: ["Execution order samajhna interview ke liye must hai"],
      },
    },

    {
      heading: "Real World Example",
      mainDesc: [
        "Socho tum ek chef ho jo ek time pe ek dish bana sakta hai.",
        "Assistant (Web APIs) dusre kaam karte hain aur ready hone par notify karte hain.",
      ],
      pointer: {
        title: "Mapping",
        point: [
          "Chef = Call Stack",
          "Assistant = Web APIs",
          "Ready Orders = Queues",
          "Manager = Event Loop",
        ],
        moral: ["Event Loop real-world task manager ki tarah kaam karta hai"],
      },
    },

    {
      heading: "Common Mistakes",
      mainDesc: [
        "Developers aksar async behavior ko galat samajh lete hain.",
        "Isse bugs aur unexpected output aata hai.",
      ],
      pointer: {
        title: "Avoid These",
        point: [
          "setTimeout(0) ko immediate samajhna",
          "Promise aur setTimeout ka order confuse karna",
        ],
        moral: ["Async execution samajhna clean code ke liye zaroori hai"],
      },
    },
  ];

  return (
    <div>
      {eventLoopContent.map((item, idx) => (
        <Block key={idx} data={item} />
      ))}
    </div>
  );
};

export default EventLoopContainer;
