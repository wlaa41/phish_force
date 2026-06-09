Minutes of Meeting (MoM)

Module: 503IT – Communication and Collaboration

Project: Cyber-Smart Gaming for Education

Institution: Coventry University

Program: BSc Computing Science

Meeting Type: UI/UX Design Review & Visual Identity Approval

Meeting Date: 06/05/2026

Time: 40 Minutes

Meeting Chair: Prathish Thangaraj

Minute Taker: Prathish Thangaraj

Meeting Purpose

Review the initial UI mockups shared by the design lead.

Evaluate layout choices and responsiveness across screen sizes.

Approve the visual identity: colour palette, fonts, and overall theme.

Identify and resolve any design issues before implementation begins.

Assign screen-specific development tasks based on the approved mockups.

Attendees

Because Dipesh was at work. He could not join the meeting, but he had to do his own task separated through the Trello.

Fig: Prathish shared screen and talked about Database Structure Design in Teams meeting.

Discussion Summary

Prathish Thangaraj presented the initial mockups for the login screen and home (HQ) screen by Prateek Rana. The overall cyberpunk aesthetic — dark backgrounds (#050010), neon purple/cyan accents, and glowing UI elements — was well received by the team.

During the review, Allen noted that the home screen layout was breaking on smaller viewport widths. Elements positioned with absolute pixel values were overflowing the screen on laptops with lower resolutions. Allen identified the root cause: the layout used position: absolute with fixed left/top values rather than a flexible layout model. He suggested switching to CSS Flexbox with position:fixed for fixed UI panels, which would make the layout viewport-relative and far more stable. Allen implemented the fix live during the meeting and the team confirmed it resolved the issue.

The color palette was formally approved: primary background #050010 (deep space black), accent colours #b300ff (neon purple) and #00ccff (electric cyan), gold #ffd700 for coins, and red #ff4466 for lives/hearts.

The Orbitron font (weights 400, 600, 800, 900) was confirmed for all headings and UI labels. Rajdhani (weights 400, 600, 700) was selected for body text and descriptions due to its readability at small sizes.

Avtar raised a question about how the ShadowPhish logo would be incorporated. It was agreed the PNG logo would be used in the HQ screen as a holographic floating badge with a CSS float animation.

Wireframes for the Intel Mission question screen and Highway Chase game canvas were reviewed. The team confirmed the question screen should follow a reference layout with a top question card and a 2x2 answer grid below.

Decisions Made

Approved colour palette: #050010 background, #b300ff purple, #00ccff cyan, #ffd700 gold, #ff4466 red.

Fonts confirmed: Orbitron for headings, Rajdhani for body text — both loaded from Google Fonts CDN.

CSS Flexbox + position:fixed adopted as the layout model for all UI panels.

SVG logo to be embedded as a holographic badge on the HQ screen with float animation.

Intel Mission screen to use a question card (top) and 2×2 answer button grid (bottom).

All hover effects to use transform:translateY and box-shadow glow for consistency.

Action Items

Rebuild home screen layout using Flexbox — Allen Twins George.

Implement login page with the approved colour palette — Prathish Thangaraj.

Begin Intel Mission HTML/CSS structure — Prateek Rana.

Integrate SVG logo with float animation into the HQ screen — Avtar.

Document the approved colour codes and font sizes for team reference — Prathish Thangaraj.

Closing Remarks

The design review was highly productive. Resolving the viewport layout issue early prevented a significant amount of rework later. The team now has a clear and agreed visual language to implement consistently across all screens. The next meeting will focus on reviewing the Intel Mission quiz game implementation.

Key Points

The following key terms and concepts should be reflected in each member's individual report:

UX/UI design — the process of designing interfaces that are both visually appealing and intuitive to navigate.

CSS Flexbox — a layout model used to create responsive, flexible UI structures without fixed pixel positioning.

position:fixed — CSS property that anchors an element to the viewport, ensuring it stays in place during scrolling.

Visual identity — the consistent use of colour, typography, and spacing to create a recognisable brand aesthetic.

Responsive design — designing layouts that adapt correctly to different screen sizes and resolutions.

Iterative prototyping — testing and refining designs in short cycles to catch layout and usability issues early.

Neon cyberpunk aesthetic — a design theme characterised by dark backgrounds, glowing neon accents, and futuristic typography.
