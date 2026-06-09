Minutes of Meeting (MoM)

Module: 503IT – Communication and Collaboration

Project: Cyber-Smart Gaming for Education

Institution: Coventry University

Program: BSc Computing Science

Meeting Type: Highway Chase Development Review & Bug Fixes

Meeting Date: 06/09/2026

Time: 15 minutes (9:45 – 10:00)

Meeting Chair: Bishal Raut

Minute Taker: Bishal Raut

Meeting Purpose

Review the current state of the Highway Chase game.

Identify and resolve the obstacle spawning visual bug.

Finalise game mechanics: coin-only pickups, question line system, and speed boost reward.

Replace the player car sprite with a bike for better game identity.

Confirm infinite runner design and remove the 3000m win condition.

Attendees

Dipesh was not present in the class during meeting time.

Discussion Summary

Prathish demonstrated the current Highway Chase game. The core game loop — lane switching, obstacle avoidance, coin collection, and checkpoint questions — was functional.

During testing, Avtar noticed that obstacle cars were appearing suddenly in the middle of the screen rather than smoothly entering from the top. This made it impossible for the player to react in time. Allen reviewed the spawn code and identified the issue: obstacle Y coordinates were being initialised at H*0.38 - 80 (approximately 38% down the screen) instead of at -90 (above the visible canvas area). Allen suggested setting the initial Y to -90 so obstacles would enter from beyond the top edge and scroll downward naturally, giving the player adequate reaction time. The fix was applied and tested successfully.

The team discussed the player vehicle. Prateek proposed replacing the car sprite with a motorcycle/bike for a more distinct visual identity. Prathish designed a new top-down bike drawing function using Canvas API ellipses and rounded rectangles to represent wheels, frame, rider helmet, handlebars, and an exhaust flame during speed boost.

The pickup system was simplified: star and boost pickups were removed. Only coins now appear on the road. A speed boost is awarded exclusively as a checkpoint reward when the player answers all 3 questions correctly — reinforcing the educational incentive.

The checkpoint trigger was redesigned. Previously, questions appeared randomly based on distance thresholds. The team agreed on a more intuitive system: a glowing yellow question line appears on the road every 1500m and scrolls toward the player. When the player crosses the line, the question overlay appears.

The 3000m win condition was removed to make the game an infinite runner. The game now ends only if the player loses all hearts (from collisions) or the opponent gap reaches 100%.

Decisions Made

Obstacle Y spawn coordinate changed from H*0.38-80 to -90 to allow natural top-to-bottom entry.

Player car sprite replaced with a top-down motorcycle drawn using Canvas API.

Only coin pickups remain on the road; speed boost rewarded for 3/3 correct checkpoint answers.

Question line system introduced: glowing line appears every 1500m and scrolls toward the player.

Game is now infinite — no distance-based win condition; ends on hearts=0 or gap=100%.

Right-edge progress bar updated to show progress within the current 1500m segment.

Action Items

Apply obstacle spawn fix (Y = -90) and verify smooth entry on all speed levels — Allen Twins George.

Finalise the bike drawing function and test exhaust flame animation — Prathish Thangaraj.

Implement question line spawning logic and on-cross trigger — Prateek Rana.

Remove star/boost pickups and wire speed boost to 3/3 checkpoint reward — Bishal Raut.

Test infinite loop: verify game never ends by distance, only by loss conditions — Avtar.

Closing Remarks

The meeting resolved a critical gameplay bug and introduced several improvements that strengthen the game's educational design. Tying the speed boost to correct answers directly incentivises engagement with the quiz content. The question line mechanic adds visual anticipation and makes the checkpoint feel intentional rather than arbitrary. The team is confident the chase game will be ready for integration testing at the next meeting.

Key Points

The following key terms and concepts should be reflected in each member's individual report:

Canvas API game loop — uses requestAnimationFrame to redraw the canvas each frame, creating smooth animation for the infinite runner.

Spawn mechanics — controlling where and when game objects (obstacles, coins) enter the visible screen area to ensure fair and smooth gameplay.

Infinite runner pattern — a game design pattern where the level never ends; difficulty scales over time and the player survives as long as possible.

Collision detection — checking whether two game objects overlap in screen space to trigger events such as taking damage or collecting a coin.

Educational game design — linking gameplay rewards (speed boost) directly to correct educational responses to reinforce learning outcomes.

Coordinate system — in Canvas, (0,0) is the top-left corner; objects spawn above the canvas (negative Y) and scroll downward to simulate forward movement.

Cybersecurity incentive — rewarding knowledge of phishing and social engineering concepts within the game mechanic to motivate learning.