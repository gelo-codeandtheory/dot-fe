import Article from "../../../models/Article";

const articles: Array<Article> = [
  // 10 Interview Questions Every Javascript Developer Should Know
  {
    id: "1",
    publisher: "Javascript Scene",
    title: `10 Interview Questions
        Every Javascript Developer Should Know`,
    author: {
      name: "Eric Elliott",
      image: "/author1.jpeg",
    },
    datePublish: "Oct 3, 2015",
    timeRead: "13 min read",
    subheader: "AKA: The Keys to Javascript Mastery",
    content: `<h1>Update: 2020</h1>
              <p>
                In the years since I wrote this article, a lot has changed. When I
                wrote it, lots of developers were coming to JavaScript from
                languages like Java and C++, lacking any understanding of how
                objects work in JavaScript, and trying to apply obsolete patterns,
                such as deeply layered inheritance hierarchies.
              </p>
              <p>
                Thanks in part to warnings from influential software developers and
                framework authors (particularly the authors of React, who wisely
                listened to the warnings and encouraged better alternatives such as
                higher order components and React hooks for idiomatic React), the
                trend of overusing class inheritance in JavaScript has mostly died.
                And it’s missed by nobody.
              </p>
              <p>In recent job interviews, here’s what I do:</p>
              <p>
                <strong>Ask the candidate to build a click counter</strong> using
                any popular framework (React preferred in 2020). This ridiculously
                simple app has one job: keep track of how many times the user has
                clicked the button during the current session. No storage. No
                network I/O. Just count clicks. It is intentionally ridiculously
                simple: We’re not trying to stump the developer — we’re just trying
                to verify that they know how to code. I prefer to do this in a pair
                programming session via a remote Zoom meeting — no use flying a
                candidate to some office just to watch them code.
              </p>
      
              <figure>
                <iframe
                  src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                  frameBorder="0"
                  height="480"
                  width="854"
                  title="The Profit Principles With Marcus Lemonis | The Profit"
                  className="eg aq as ag dq"
                  scrolling="auto"
                ></iframe>
              </figure>
      
              <ol>
                <li>
                  <h2>
                    Can you name two programming paradigms important for Javascript
                    app developers?
                  </h2>
                  <p>
                    JavaScript is a multi-paradigm language, supporting
                    imperative/procedural programming along with OOP
                    (Object-Oriented Programming) and functional programming.
                    JavaScript supports OOP with prototypal inheritance.
                  </p>
                  <p>
                    <strong>Good to hear:</strong>
                  </p>
                  <ul>
                    <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                    <li>
                      Functional programming (also: closures, first class functions,
                      lambdas).
                    </li>
                  </ul>
                  <p>
                    <strong>Red flags:</strong>
                  </p>
                  <ul>
                    <li>
                      No clue what a paradigm is, no mention of prototypal oo or
                      functional programming.
                    </li>
                  </ul>
                  <p>
                    <strong>Learn More:</strong>
                  </p>
                  <ul>
                    <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                    <li>
                      The Two Pillars of JavaScript Part 2 — Functional Programming.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>What is functional programming</h2>
                  <p>
                    Functional programming produces programs by composing
                    mathematical functions and avoids shared state & mutable data.
                    Lisp (specified in 1958) was among the first languages to
                    support functional programming, and was heavily inspired by
                    lambda calculus. Lisp and many Lisp family languages are still
                    in common use today.
                  </p>
                  <p>
                    Functional programming is an essential concept in JavaScript
                    (one of the two pillars of JavaScript). Several common
                    functional utilities were added to JavaScript in ES5.
                  </p>
                </li>
              </ol>`,
    tags: ["Programming", "Education"],
    description: "Description...",
    recommendations: [
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
    ],
  },
  // Body Inventory
  {
    id: "2",
    publisher: "Javascript Scene",
    title: `Body Inventory`,
    author: {
      name: "Cai Emmons",
      image: "https://miro.medium.com/fit/c/176/176/0*BkkuAAp8BXp9z6Lo",
    },
    datePublish: "Oct 3, 2015",
    timeRead: "13 min read",
    subheader: "AKA: The Keys to Javascript Mastery",
    content: `<h1>Update: 2020</h1>
              <p>
                In the years since I wrote this article, a lot has changed. When I
                wrote it, lots of developers were coming to JavaScript from
                languages like Java and C++, lacking any understanding of how
                objects work in JavaScript, and trying to apply obsolete patterns,
                such as deeply layered inheritance hierarchies.
              </p>
              <p>
                Thanks in part to warnings from influential software developers and
                framework authors (particularly the authors of React, who wisely
                listened to the warnings and encouraged better alternatives such as
                higher order components and React hooks for idiomatic React), the
                trend of overusing class inheritance in JavaScript has mostly died.
                And it’s missed by nobody.
              </p>
              <p>In recent job interviews, here’s what I do:</p>
              <p>
                <strong>Ask the candidate to build a click counter</strong> using
                any popular framework (React preferred in 2020). This ridiculously
                simple app has one job: keep track of how many times the user has
                clicked the button during the current session. No storage. No
                network I/O. Just count clicks. It is intentionally ridiculously
                simple: We’re not trying to stump the developer — we’re just trying
                to verify that they know how to code. I prefer to do this in a pair
                programming session via a remote Zoom meeting — no use flying a
                candidate to some office just to watch them code.
              </p>
      
              <figure>
                <iframe
                  src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                  frameBorder="0"
                  height="480"
                  width="854"
                  title="The Profit Principles With Marcus Lemonis | The Profit"
                  className="eg aq as ag dq"
                  scrolling="auto"
                ></iframe>
              </figure>
      
              <ol>
                <li>
                  <h2>
                    Can you name two programming paradigms important for Javascript
                    app developers?
                  </h2>
                  <p>
                    JavaScript is a multi-paradigm language, supporting
                    imperative/procedural programming along with OOP
                    (Object-Oriented Programming) and functional programming.
                    JavaScript supports OOP with prototypal inheritance.
                  </p>
                  <p>
                    <strong>Good to hear:</strong>
                  </p>
                  <ul>
                    <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                    <li>
                      Functional programming (also: closures, first class functions,
                      lambdas).
                    </li>
                  </ul>
                  <p>
                    <strong>Red flags:</strong>
                  </p>
                  <ul>
                    <li>
                      No clue what a paradigm is, no mention of prototypal oo or
                      functional programming.
                    </li>
                  </ul>
                  <p>
                    <strong>Learn More:</strong>
                  </p>
                  <ul>
                    <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                    <li>
                      The Two Pillars of JavaScript Part 2 — Functional Programming.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>What is functional programming</h2>
                  <p>
                    Functional programming produces programs by composing
                    mathematical functions and avoids shared state & mutable data.
                    Lisp (specified in 1958) was among the first languages to
                    support functional programming, and was heavily inspired by
                    lambda calculus. Lisp and many Lisp family languages are still
                    in common use today.
                  </p>
                  <p>
                    Functional programming is an essential concept in JavaScript
                    (one of the two pillars of JavaScript). Several common
                    functional utilities were added to JavaScript in ES5.
                  </p>
                </li>
              </ol>`,
    tags: ["Programming", "Education"],
    description:
      "I was in college and deeply involved in theater. We were doing an exercise blindfolded, in a dark room, and we were instructed not to speak but to get to know each other by touch — a group grope. Afterwards one of the participants told me he’d noticed my ribcage was unusual for the way it went straight down rather than curving in at the waist. He said this without judgment; he was simply offering an observation. I hadn’t ever noticed this anomaly about myself, this certain way my body was different from other bodies. Bill Ochs is forever imprinted on my memory for having said that.",

    recommendations: [
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
    ],
  },
  // Virtual Real Estate Will Be the Next Speculative Frenzy
  {
    id: "3",
    publisher: "Marker",
    title: `Virtual Real Estate Will Be the Next Speculative Frenzy`,
    author: {
      name: "Scott Galloway",
      image:
        "https://miro.medium.com/fit/c/96/96/1*UmXe4ATjCtj3OENRaZnIpw.jpeg",
    },
    datePublish: "Feb 14, 2022",
    timeRead: "8 min read",
    subheader: "AKA: The Keys to Javascript Mastery",
    content: `<h1>Update: 2020</h1>
              <p>
                In the years since I wrote this article, a lot has changed. When I
                wrote it, lots of developers were coming to JavaScript from
                languages like Java and C++, lacking any understanding of how
                objects work in JavaScript, and trying to apply obsolete patterns,
                such as deeply layered inheritance hierarchies.
              </p>
              <p>
                Thanks in part to warnings from influential software developers and
                framework authors (particularly the authors of React, who wisely
                listened to the warnings and encouraged better alternatives such as
                higher order components and React hooks for idiomatic React), the
                trend of overusing class inheritance in JavaScript has mostly died.
                And it’s missed by nobody.
              </p>
              <p>In recent job interviews, here’s what I do:</p>
              <p>
                <strong>Ask the candidate to build a click counter</strong> using
                any popular framework (React preferred in 2020). This ridiculously
                simple app has one job: keep track of how many times the user has
                clicked the button during the current session. No storage. No
                network I/O. Just count clicks. It is intentionally ridiculously
                simple: We’re not trying to stump the developer — we’re just trying
                to verify that they know how to code. I prefer to do this in a pair
                programming session via a remote Zoom meeting — no use flying a
                candidate to some office just to watch them code.
              </p>
      
              <figure>
                <iframe
                  src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                  frameBorder="0"
                  height="480"
                  width="854"
                  title="The Profit Principles With Marcus Lemonis | The Profit"
                  className="eg aq as ag dq"
                  scrolling="auto"
                ></iframe>
              </figure>
      
              <ol>
                <li>
                  <h2>
                    Can you name two programming paradigms important for Javascript
                    app developers?
                  </h2>
                  <p>
                    JavaScript is a multi-paradigm language, supporting
                    imperative/procedural programming along with OOP
                    (Object-Oriented Programming) and functional programming.
                    JavaScript supports OOP with prototypal inheritance.
                  </p>
                  <p>
                    <strong>Good to hear:</strong>
                  </p>
                  <ul>
                    <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                    <li>
                      Functional programming (also: closures, first class functions,
                      lambdas).
                    </li>
                  </ul>
                  <p>
                    <strong>Red flags:</strong>
                  </p>
                  <ul>
                    <li>
                      No clue what a paradigm is, no mention of prototypal oo or
                      functional programming.
                    </li>
                  </ul>
                  <p>
                    <strong>Learn More:</strong>
                  </p>
                  <ul>
                    <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                    <li>
                      The Two Pillars of JavaScript Part 2 — Functional Programming.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>What is functional programming</h2>
                  <p>
                    Functional programming produces programs by composing
                    mathematical functions and avoids shared state & mutable data.
                    Lisp (specified in 1958) was among the first languages to
                    support functional programming, and was heavily inspired by
                    lambda calculus. Lisp and many Lisp family languages are still
                    in common use today.
                  </p>
                  <p>
                    Functional programming is an essential concept in JavaScript
                    (one of the two pillars of JavaScript). Several common
                    functional utilities were added to JavaScript in ES5.
                  </p>
                </li>
              </ol>`,
    tags: ["Programming", "Education"],
    description:
      "The American dream of homeownership has become a hallucination — in the metaverse",
    link: "https://marker.medium.com/virtual-real-estate-will-be-the-next-speculative-frenzy-43083d9638f8",
    recommendations: [
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
    ],
  },
  // What Makes a Password Strong: Why What You’ve Been Told Is Wrong
  {
    id: "4",
    publisher: "Javascript Scene",
    title: `What Makes a Password Strong: Why What You’ve Been Told Is Wrong`,
    author: {
      name: "Eric Elliott",
      image:
        "https://miro.medium.com/fit/c/96/96/1*IgH48tzVlGK-7ci_VCKRfw.jpeg",
    },
    datePublish: "Jan 22, 2022",
    timeRead: "13 min read",
    subheader: "AKA: The Keys to Javascript Mastery",
    content: `<h1>Update: 2020</h1>
              <p>
                In the years since I wrote this article, a lot has changed. When I
                wrote it, lots of developers were coming to JavaScript from
                languages like Java and C++, lacking any understanding of how
                objects work in JavaScript, and trying to apply obsolete patterns,
                such as deeply layered inheritance hierarchies.
              </p>
              <p>
                Thanks in part to warnings from influential software developers and
                framework authors (particularly the authors of React, who wisely
                listened to the warnings and encouraged better alternatives such as
                higher order components and React hooks for idiomatic React), the
                trend of overusing class inheritance in JavaScript has mostly died.
                And it’s missed by nobody.
              </p>
              <p>In recent job interviews, here’s what I do:</p>
              <p>
                <strong>Ask the candidate to build a click counter</strong> using
                any popular framework (React preferred in 2020). This ridiculously
                simple app has one job: keep track of how many times the user has
                clicked the button during the current session. No storage. No
                network I/O. Just count clicks. It is intentionally ridiculously
                simple: We’re not trying to stump the developer — we’re just trying
                to verify that they know how to code. I prefer to do this in a pair
                programming session via a remote Zoom meeting — no use flying a
                candidate to some office just to watch them code.
              </p>
      
              <figure>
                <iframe
                  src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                  frameBorder="0"
                  height="480"
                  width="854"
                  title="The Profit Principles With Marcus Lemonis | The Profit"
                  className="eg aq as ag dq"
                  scrolling="auto"
                ></iframe>
              </figure>
      
              <ol>
                <li>
                  <h2>
                    Can you name two programming paradigms important for Javascript
                    app developers?
                  </h2>
                  <p>
                    JavaScript is a multi-paradigm language, supporting
                    imperative/procedural programming along with OOP
                    (Object-Oriented Programming) and functional programming.
                    JavaScript supports OOP with prototypal inheritance.
                  </p>
                  <p>
                    <strong>Good to hear:</strong>
                  </p>
                  <ul>
                    <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                    <li>
                      Functional programming (also: closures, first class functions,
                      lambdas).
                    </li>
                  </ul>
                  <p>
                    <strong>Red flags:</strong>
                  </p>
                  <ul>
                    <li>
                      No clue what a paradigm is, no mention of prototypal oo or
                      functional programming.
                    </li>
                  </ul>
                  <p>
                    <strong>Learn More:</strong>
                  </p>
                  <ul>
                    <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                    <li>
                      The Two Pillars of JavaScript Part 2 — Functional Programming.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>What is functional programming</h2>
                  <p>
                    Functional programming produces programs by composing
                    mathematical functions and avoids shared state & mutable data.
                    Lisp (specified in 1958) was among the first languages to
                    support functional programming, and was heavily inspired by
                    lambda calculus. Lisp and many Lisp family languages are still
                    in common use today.
                  </p>
                  <p>
                    Functional programming is an essential concept in JavaScript
                    (one of the two pillars of JavaScript). Several common
                    functional utilities were added to JavaScript in ES5.
                  </p>
                </li>
              </ol>`,
    tags: ["Cybersecurity"],
    description: "and it’s actually making your passwords weaker.",
    link: "https://medium.com/codex/what-makes-a-password-strong-why-what-youve-been-told-is-wrong-8e25539d2213",
    recommendations: [
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
    ],
  },
  // DevOps Engineer is the new SysAdmin
  {
    id: "5",
    publisher: "Javascript Scene",
    title: `DevOps Engineer is the new SysAdmin`,
    author: {
      name: "Eric Elliott",
      image:
        "https://miro.medium.com/fit/c/96/96/1*VZfJFJj5oVmZ5WzlrgSmRg.jpeg",
    },
    datePublish: "Aug 9, 2021",
    timeRead: "13 min read",
    subheader: "AKA: The Keys to Javascript Mastery",
    content: `<h1>Update: 2020</h1>
              <p>
                In the years since I wrote this article, a lot has changed. When I
                wrote it, lots of developers were coming to JavaScript from
                languages like Java and C++, lacking any understanding of how
                objects work in JavaScript, and trying to apply obsolete patterns,
                such as deeply layered inheritance hierarchies.
              </p>
              <p>
                Thanks in part to warnings from influential software developers and
                framework authors (particularly the authors of React, who wisely
                listened to the warnings and encouraged better alternatives such as
                higher order components and React hooks for idiomatic React), the
                trend of overusing class inheritance in JavaScript has mostly died.
                And it’s missed by nobody.
              </p>
              <p>In recent job interviews, here’s what I do:</p>
              <p>
                <strong>Ask the candidate to build a click counter</strong> using
                any popular framework (React preferred in 2020). This ridiculously
                simple app has one job: keep track of how many times the user has
                clicked the button during the current session. No storage. No
                network I/O. Just count clicks. It is intentionally ridiculously
                simple: We’re not trying to stump the developer — we’re just trying
                to verify that they know how to code. I prefer to do this in a pair
                programming session via a remote Zoom meeting — no use flying a
                candidate to some office just to watch them code.
              </p>
      
              <figure>
                <iframe
                  src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                  frameBorder="0"
                  height="480"
                  width="854"
                  title="The Profit Principles With Marcus Lemonis | The Profit"
                  className="eg aq as ag dq"
                  scrolling="auto"
                ></iframe>
              </figure>
      
              <ol>
                <li>
                  <h2>
                    Can you name two programming paradigms important for Javascript
                    app developers?
                  </h2>
                  <p>
                    JavaScript is a multi-paradigm language, supporting
                    imperative/procedural programming along with OOP
                    (Object-Oriented Programming) and functional programming.
                    JavaScript supports OOP with prototypal inheritance.
                  </p>
                  <p>
                    <strong>Good to hear:</strong>
                  </p>
                  <ul>
                    <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                    <li>
                      Functional programming (also: closures, first class functions,
                      lambdas).
                    </li>
                  </ul>
                  <p>
                    <strong>Red flags:</strong>
                  </p>
                  <ul>
                    <li>
                      No clue what a paradigm is, no mention of prototypal oo or
                      functional programming.
                    </li>
                  </ul>
                  <p>
                    <strong>Learn More:</strong>
                  </p>
                  <ul>
                    <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                    <li>
                      The Two Pillars of JavaScript Part 2 — Functional Programming.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>What is functional programming</h2>
                  <p>
                    Functional programming produces programs by composing
                    mathematical functions and avoids shared state & mutable data.
                    Lisp (specified in 1958) was among the first languages to
                    support functional programming, and was heavily inspired by
                    lambda calculus. Lisp and many Lisp family languages are still
                    in common use today.
                  </p>
                  <p>
                    Functional programming is an essential concept in JavaScript
                    (one of the two pillars of JavaScript). Several common
                    functional utilities were added to JavaScript in ES5.
                  </p>
                </li>
              </ol>`,
    tags: ["Business"],
    description: "If you’re not doing dev… you’re just doing ops",
    link: "https://medium.com/nerd-for-tech/devops-engineer-is-the-new-sysadmin-5bc46b86d413",
    recommendations: [
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
    ],
  },
  // No One Wants Your Metaverse
  {
    id: "6",
    publisher: "Javascript Scene",
    title: `No One Wants Your Metaverse`,
    author: {
      name: "Julio Vincent Gambuto",
      image: "https://miro.medium.com/fit/c/96/96/1*zjhYAHssAOSL-79v0M2c7w.png",
    },
    datePublish: "Oct 3, 2015",
    timeRead: "13 min read",
    subheader: "AKA: The Keys to Javascript Mastery",
    content: `<h1>Update: 2020</h1>
              <p>
                In the years since I wrote this article, a lot has changed. When I
                wrote it, lots of developers were coming to JavaScript from
                languages like Java and C++, lacking any understanding of how
                objects work in JavaScript, and trying to apply obsolete patterns,
                such as deeply layered inheritance hierarchies.
              </p>
              <p>
                Thanks in part to warnings from influential software developers and
                framework authors (particularly the authors of React, who wisely
                listened to the warnings and encouraged better alternatives such as
                higher order components and React hooks for idiomatic React), the
                trend of overusing class inheritance in JavaScript has mostly died.
                And it’s missed by nobody.
              </p>
              <p>In recent job interviews, here’s what I do:</p>
              <p>
                <strong>Ask the candidate to build a click counter</strong> using
                any popular framework (React preferred in 2020). This ridiculously
                simple app has one job: keep track of how many times the user has
                clicked the button during the current session. No storage. No
                network I/O. Just count clicks. It is intentionally ridiculously
                simple: We’re not trying to stump the developer — we’re just trying
                to verify that they know how to code. I prefer to do this in a pair
                programming session via a remote Zoom meeting — no use flying a
                candidate to some office just to watch them code.
              </p>
      
              <figure>
                <iframe
                  src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                  frameBorder="0"
                  height="480"
                  width="854"
                  title="The Profit Principles With Marcus Lemonis | The Profit"
                  className="eg aq as ag dq"
                  scrolling="auto"
                ></iframe>
              </figure>
      
              <ol>
                <li>
                  <h2>
                    Can you name two programming paradigms important for Javascript
                    app developers?
                  </h2>
                  <p>
                    JavaScript is a multi-paradigm language, supporting
                    imperative/procedural programming along with OOP
                    (Object-Oriented Programming) and functional programming.
                    JavaScript supports OOP with prototypal inheritance.
                  </p>
                  <p>
                    <strong>Good to hear:</strong>
                  </p>
                  <ul>
                    <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                    <li>
                      Functional programming (also: closures, first class functions,
                      lambdas).
                    </li>
                  </ul>
                  <p>
                    <strong>Red flags:</strong>
                  </p>
                  <ul>
                    <li>
                      No clue what a paradigm is, no mention of prototypal oo or
                      functional programming.
                    </li>
                  </ul>
                  <p>
                    <strong>Learn More:</strong>
                  </p>
                  <ul>
                    <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                    <li>
                      The Two Pillars of JavaScript Part 2 — Functional Programming.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>What is functional programming</h2>
                  <p>
                    Functional programming produces programs by composing
                    mathematical functions and avoids shared state & mutable data.
                    Lisp (specified in 1958) was among the first languages to
                    support functional programming, and was heavily inspired by
                    lambda calculus. Lisp and many Lisp family languages are still
                    in common use today.
                  </p>
                  <p>
                    Functional programming is an essential concept in JavaScript
                    (one of the two pillars of JavaScript). Several common
                    functional utilities were added to JavaScript in ES5.
                  </p>
                </li>
              </ol>`,
    tags: ["Programming", "Education"],
    description: "Let’s define the future we actually do want",
    link: "https://onezero.medium.com/no-one-wants-your-metaverse-8f4334f52206",
    recommendations: [
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
      {
        title: "Currying for Javascript Developers with Examples",
        image: "/recommendation.jpeg",
      },
    ],
  },
];

export default articles;
