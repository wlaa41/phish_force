Minutes of Meeting (MoM)

Module: 503IT – Communication and Collaboration

Project: Cyber-Smart Gaming for Education

Institution: Coventry University

Program: BSc Computing Science

Meeting Type: Game Concept Finalisation & Technology Stack Decision

Meeting Date: 03/06/2026

Time: 11:00 AM

Meeting Chair: Prateek Rana

Minute Taker: Prathish Thangaraj

Meeting Purpose

Finalise the core game concept and overall scope.

Decide on the technology stack for development.

Define the two game modes and their mechanics.

Plan the file and folder structure of the project.

Set development milestones and assign responsibilities.

Attendees

Dipesh was not with us while we were talking about the tasks and ideas in the classroom.

Fig: 5 members discussing the initials and the story for the game.

Discussion Summary

The team confirmed the game will be browser-based and focused on phishing and social engineering awareness, targeting university-level students.

Bishal initially proposed using Phaser.js as the game framework due to its built-in physics and sprite support. However, after reviewing the project scope, Pratish raised a concern that Phaser.js would introduce unnecessary complexity and a steep learning curve for the team. After discussion, the team agreed to build the game using pure HTML5, CSS3, and vanilla JavaScript with the Canvas API for the chase game — keeping the stack lightweight and maintainable.

Two distinct game modes were confirmed: Intel Mission (a quiz-based phishing investigation mode) and Highway Chase (an infinite side-scroller with checkpoint questions). Both modes will share a common player state using the browser's localStorage API.

Allen proposed the visual direction: a dark cyberpunk aesthetic with neon accents, using the Orbitron font for headings and Rajdhani for body text.

The project file structure was agreed upon — separate HTML files per screen (index.html, home.html, intel.html, chase.html) with all styles and scripts embedded per file to keep the project self-contained.

Development milestones were outlined: login/home screen by end of day 2, Intel Mission by end of day 3, Highway Chase by end of day 4, integration and testing in day 5.

Decisions Made

The game will be built using HTML5, CSS3, and vanilla JavaScript — no external frameworks.

Canvas API will be used for the Highway Chase game rendering.

localStorage will be used to persist the player state across all pages.

Two game modes confirmed: Intel Mission and Highway Chase.

Cyberpunk dark theme with Orbitron/Rajdhani fonts adopted as the visual identity.

Each page will be a self-contained HTML file with embedded CSS and JavaScript.

Action Items

Set up project folder structure and shared GitHub repository — Prateek Rana.

Begin login/home screen HTML layout — Prathish Thangaraj.

Research Canvas API game loop patterns for the chase game — Bishal Raut.

Draft the initial question bank (20+ phishing scenarios) — Avtar.

Research cyberpunk UI references and prepare colour palette — Allen Twins George.

Closing Remarks

The team reached consensus on all key technical and design decisions. The shift from Phaser.js to vanilla JavaScript was welcomed as it allows all members to contribute more effectively. Members left with clear responsibilities and an agreed timeline. The next meeting will review initial screens and progress.

Key Points

The following key terms and concepts should be reflected in each member's individual report:

HTML5 Canvas API — used for rendering the Highway Chase game loop without a framework.

Vanilla JavaScript — chosen over frameworks (e.g. Phaser.js) to reduce complexity and ensure full team contribution.

localStorage API — enables persistent player state (coins, hearts, XP, level) across multiple HTML pages.

Gamification — applying game mechanics (points, lives, levels, rewards) to drive engagement in cybersecurity education.

Two-mode game structure — Intel Mission (quiz-based) and Highway Chase (action-based) offer varied learning experiences.

Iterative development — milestones broken into weekly sprints to allow continuous feedback and improvement.

Cybersecurity awareness — the game educates players on phishing, smishing, vishing, and social engineering attacks.