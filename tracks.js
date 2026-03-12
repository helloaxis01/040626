const GOLF_SECTIONS = [
  {
    label: "Pre-Game: The Dynamic Drive",
    tag: "G1",
    purpose: "Prime rotation, wrists, and hips before stepping onto the first tee.",
    exercises: [
      {
        id: 2001,
        name: "Standing Club Rotations",
        start: "Standing tall with feet shoulder-width apart.",
        sub: "Separate upper body rotation from stable hips.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Hold a golf club across your upper back and shoulders, gripping each end. Keep your spine straight and knees slightly bent.",
          },
          {
            focus: "ROTATE",
            cue: "Rotate your torso to the right as far as comfortable while keeping your hips and feet facing forward.",
          },
          {
            focus: "SWITCH",
            cue: "Slowly rotate to the left, feeling the separation between your upper and lower body.",
          },
        ],
      },
      {
        id: 2002,
        name: "Leg Swings",
        start: "Standing near a wall or golf cart for balance.",
        sub: "Lubricate the hip joint in front, back, and lateral planes.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Stand on one leg, engage your core, and rest a hand lightly on the wall or cart for balance.",
          },
          {
            focus: "SWING",
            cue: "Swing the opposite leg forward and backward in a controlled motion, gradually increasing the range as the hip warms up.",
          },
          {
            focus: "LATERAL",
            cue: "Switch to side-to-side swings in front of your body to open the hip socket in the lateral plane.",
          },
        ],
      },
      {
        id: 2003,
        name: "Active Wrist Circles",
        start: "Arms extended in front of you at chest height.",
        sub: "Warm wrists and forearms for gripping the club.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Make light fists with both hands with arms extended at shoulder height.",
          },
          {
            focus: "CIRCLE",
            cue: "Rotate your wrists in slow, controlled clockwise circles, using the full available range.",
          },
          {
            focus: "REVERSE",
            cue: "Change direction to counter-clockwise, releasing tension through the forearms.",
          },
        ],
      },
    ],
  },
  {
    label: "Post-Game: The Fairway Recovery",
    tag: "G2",
    purpose: "Decompress the spine, hips, and shoulders after a full round.",
    exercises: [
      {
        id: 2004,
        name: "Open Books",
        start: "Lying on your side, knees stacked and bent at 90 degrees.",
        sub: "Restore thoracic rotation after repetitive swings.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SPINE",
            cue: "Extend both arms straight out in front of you with palms touching and knees stacked.",
          },
          {
            focus: "OPEN",
            cue: "Lift the top arm and rotate it slowly across your body toward the floor behind you while keeping your knees pinned together.",
          },
          {
            focus: "RESET",
            cue: "Breathe deeply into the stretch, then slowly return to the starting position and repeat.",
          },
        ],
      },
      {
        id: 2005,
        name: "Kneeling Hip Flexor Stretch",
        start: "In a half-kneeling position with one knee on the floor.",
        sub: "Lengthen the front of the hip after walking and swinging.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Keep your front foot flat, torso upright, and ribs stacked over the pelvis.",
          },
          {
            focus: "TUCK",
            cue: "Gently tuck your pelvis under and lean forward slightly until you feel a stretch in the front of your back hip.",
          },
          {
            focus: "REACH",
            cue: "Reach the arm on the same side as your back knee toward the ceiling to deepen the release.",
          },
        ],
      },
      {
        id: 2006,
        name: "Thread the Needle",
        start: "On all fours with hands under shoulders and knees under hips.",
        sub: "Release tension between the shoulder blades.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Slide one arm underneath the other, palm up, reaching as far as comfortable.",
          },
          {
            focus: "ROTATE",
            cue: "Lower your shoulder and ear toward the floor, letting the upper back rotate.",
          },
          {
            focus: "BREATH",
            cue: "Hold and breathe into the space between your shoulder blades before switching sides.",
          },
        ],
      },
    ],
  },
];

const TENNIS_SECTIONS = [
  {
    label: "Pre-Game: The Court Readiness",
    tag: "T1",
    purpose: "Prepare hips, shoulders, and ankles for multi-directional court work.",
    exercises: [
      {
        id: 2011,
        name: "Lateral Lunges with Reach",
        start: "Standing with feet wide apart.",
        sub: "Groove lateral load and balance for wide court coverage.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Shift your weight to the right, bending the right knee while keeping the left leg straight.",
          },
          {
            focus: "REACH",
            cue: "Reach your arms forward to balance your weight and keep the chest lifted.",
          },
          {
            focus: "SWITCH",
            cue: "Push off the right foot to return to center, then repeat on the left side.",
          },
        ],
      },
      {
        id: 2012,
        name: "Shoulder Y & T Raises",
        start: "Standing with a slight hinge at the hips.",
        sub: "Activate lower traps and posterior shoulder for overhead work.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Let your arms hang down with thumbs pointing out and spine long.",
          },
          {
            focus: "Y-RAISE",
            cue: "Raise your arms up to form a Y shape, squeezing the shoulder blades together.",
          },
          {
            focus: "T-RAISE",
            cue: "Lower your arms, then raise them straight out to the sides to form a T, maintaining control.",
          },
        ],
      },
      {
        id: 2013,
        name: "Ankle Hops",
        start: "Standing tall with feet close together.",
        sub: "Prime calf and Achilles for quick first steps.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Stay light on the balls of your feet with knees slightly soft.",
          },
          {
            focus: "HOP",
            cue: "Perform small, quick vertical hops, focusing on a fast bounce off the ground.",
          },
          {
            focus: "STABILITY",
            cue: "Keep your core tight and land softly each time without letting the heels slam down.",
          },
        ],
      },
    ],
  },
  {
    label: "Post-Game: The Decompression",
    tag: "T2",
    purpose: "Release forearms, hips, and side body after play.",
    exercises: [
      {
        id: 2014,
        name: "Forearm Extensor Release",
        start: "Arm extended straight in front of you.",
        sub: "Unload the outer elbow and backhand tissues.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Point your fingers toward the floor with the palm facing you.",
          },
          {
            focus: "STRETCH",
            cue: "Use the opposite hand to gently pull the back of your hand toward your body until you feel a stretch.",
          },
          {
            focus: "RELEASE",
            cue: "Hold for several breaths, then ease off and switch sides.",
          },
        ],
      },
      {
        id: 2015,
        name: "Figure-4 Glute Stretch",
        start: "Lying on your back with knees bent.",
        sub: "Open the hips after repeated lunges and changes of direction.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Cross your right ankle over your left knee to create a figure-4 shape.",
          },
          {
            focus: "PULL",
            cue: "Reach through and grab your left thigh, gently pulling it toward your chest.",
          },
          {
            focus: "SWITCH",
            cue: "Hold for several breaths, then repeat on the opposite side.",
          },
        ],
      },
      {
        id: 2016,
        name: "Child's Pose with Side Reach",
        start: "Kneeling on the floor, sitting back on your heels.",
        sub: "Lengthen lats and side body after serving and overheads.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Fold forward and rest your forehead on the floor with arms extended in front of you.",
          },
          {
            focus: "REACH",
            cue: "Walk both hands to the right until you feel a stretch along your left side and lat.",
          },
          {
            focus: "SWITCH",
            cue: "Walk hands back to center, then over to the left side and repeat.",
          },
        ],
      },
    ],
  },
];

const WALKING_SECTIONS = [
  {
    label: "Pre-Walk: The Gait Prep",
    tag: "W1",
    purpose: "Wake ankles, hips, and arms before a long walk.",
    exercises: [
      {
        id: 2021,
        name: "Ankle Circles",
        start: "Standing tall, using a wall for balance if needed.",
        sub: "Mobilize the ankles before the miles.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Lift one foot off the ground while lightly supporting yourself on the wall if needed.",
          },
          {
            focus: "CIRCLE",
            cue: "Rotate the ankle in slow, controlled clockwise circles.",
          },
          {
            focus: "REVERSE",
            cue: "Switch to counter-clockwise circles, then repeat with the other foot.",
          },
        ],
      },
      {
        id: 2022,
        name: "Glute Activation Drive",
        start: "Standing with feet hip-width apart.",
        sub: "Fire the glutes to support the pelvis with each step.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Shift weight to your left leg and engage your core.",
          },
          {
            focus: "DRIVE",
            cue: "Lift the right knee toward your chest while squeezing the left glute.",
          },
          {
            focus: "SWITCH",
            cue: "Lower the foot with control and repeat on the other side, staying tall.",
          },
        ],
      },
      {
        id: 2023,
        name: "Controlled Arm Swings",
        start: "Standing tall with shoulders relaxed.",
        sub: "Rehearse efficient arm swing for walking.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Bend your elbows slightly and let the arms hang by your sides.",
          },
          {
            focus: "SWING",
            cue: "Swing your arms forward and backward from the shoulder joint in a natural rhythm.",
          },
          {
            focus: "RELAX",
            cue: "Keep your neck long and avoid shrugging the shoulders as you move.",
          },
        ],
      },
    ],
  },
  {
    label: "Post-Walk: The Decompression",
    tag: "W2",
    purpose: "Release calves, quads, and foot arches after the miles.",
    exercises: [
      {
        id: 2024,
        name: "Calf Release",
        start: "Standing facing a wall.",
        sub: "Lengthen the calf and Achilles after long walks.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Place both hands on the wall and step one foot back.",
          },
          {
            focus: "PRESS",
            cue: "Keep the back heel on the floor and lean into the wall until you feel a stretch in the calf.",
          },
          {
            focus: "BEND",
            cue: "Slightly bend the back knee to target the lower calf and Achilles, then switch sides.",
          },
        ],
      },
      {
        id: 2025,
        name: "Standing Quad Stretch",
        start: "Standing tall, holding a chair for balance.",
        sub: "Open the front of the thigh after steady forward motion.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Reach back and grab your right ankle or foot.",
          },
          {
            focus: "ALIGN",
            cue: "Pull the heel toward your glute while keeping your knees together and torso upright.",
          },
          {
            focus: "SWITCH",
            cue: "Hold the stretch, then repeat on the left side.",
          },
        ],
      },
      {
        id: 2026,
        name: "Foot Arch Massage",
        start: "Standing or seated.",
        sub: "Reset the arches after time on your feet.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Place a small ball or firm object under the arch of your foot.",
          },
          {
            focus: "ROLL",
            cue: "Apply gentle pressure and roll the foot forward and backward over the object.",
          },
          {
            focus: "FOCUS",
            cue: "Spend extra time on any tight or tender spots before switching feet.",
          },
        ],
      },
    ],
  },
];

const RUNNING_SECTIONS = [
  {
    label: "Pre-Run: The Impact Ready",
    tag: "R1",
    purpose: "Prime tendons, hips, and hamstrings before impact.",
    exercises: [
      {
        id: 2031,
        name: "Pogo Hops",
        start: "Standing with feet hip-width apart.",
        sub: "Wake up calf and Achilles for impact.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Keep your knees almost straight and stand tall.",
          },
          {
            focus: "BOUNCE",
            cue: "Jump using only your ankles and calves, staying on the balls of your feet.",
          },
          {
            focus: "RHYTHM",
            cue: "Maintain a quick, rhythmic pace to prime the tendons.",
          },
        ],
      },
      {
        id: 2032,
        name: "Runner's Lunge with Reach",
        start: "Standing tall.",
        sub: "Open hip flexors and side body before the run.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Step back into a lunge, keeping the back leg straight and front knee stacked over the ankle.",
          },
          {
            focus: "REACH",
            cue: "Reach both arms toward the ceiling and tilt your torso slightly away from the back leg.",
          },
          {
            focus: "SWITCH",
            cue: "Return to standing and switch sides with control.",
          },
        ],
      },
      {
        id: 2033,
        name: "Hamstring Scoops",
        start: "Standing with one heel forward and toes pointed up.",
        sub: "Lengthen the hamstrings and groove front-leg loading.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Hinge at the hips while keeping the front leg straight and back knee soft.",
          },
          {
            focus: "SCOOP",
            cue: "Reach down and scoop your hands toward the floor in front of the foot, then up overhead.",
          },
          {
            focus: "SWITCH",
            cue: "Take a small step forward and repeat on the other leg.",
          },
        ],
      },
    ],
  },
  {
    label: "Post-Run: The Structural Reset",
    tag: "R2",
    purpose: "Open hips, front body, and assist venous return after the run.",
    exercises: [
      {
        id: 2034,
        name: "Seated Figure-4",
        start: "Seated on the floor with legs extended.",
        sub: "Decompress the hips after repetitive strides.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Bend your left knee and cross your right ankle over the left thigh.",
          },
          {
            focus: "PRESS",
            cue: "Lean forward slightly or pull the left thigh toward you to feel the stretch in the right hip.",
          },
          {
            focus: "SWITCH",
            cue: "Hold, then repeat on the opposite side.",
          },
        ],
      },
      {
        id: 2035,
        name: "Cobra Pose",
        start: "Lying face down on a mat.",
        sub: "Restore extension through the front of the body.",
        type: "time",
        seconds: 45,
        steps: [
          {
            focus: "SETUP",
            cue: "Place your hands on the floor next to your shoulders with elbows close to your sides.",
          },
          {
            focus: "LIFT",
            cue: "Gently press through your hands to lift your chest off the floor, keeping your hips grounded.",
          },
          {
            focus: "EXTEND",
            cue: "Draw shoulders away from your ears and breathe into the front of the body.",
          },
        ],
      },
      {
        id: 2036,
        name: "Legs Up the Wall",
        start: "Lying on your back with your glutes as close to a wall as possible.",
        sub: "Assist circulation and recovery after impact.",
        type: "time",
        seconds: 120,
        steps: [
          {
            focus: "SETUP",
            cue: "Extend your legs straight up against the wall with heels resting lightly.",
          },
          {
            focus: "RELAX",
            cue: "Let your arms rest by your sides with palms up and jaw unclenched.",
          },
          {
            focus: "BREATHE",
            cue: "Stay here for about two minutes, breathing slowly to calm the system.",
          },
        ],
      },
    ],
  },
];

const TRACKS = {
  daily:       { id: "daily",       label: "Daily Feel Good",      subtitle: "Functional · Structural · Restorative", purpose: "Spine, core, and posterior chain. The foundation session.",                          sections: DAILY_SECTIONS,    duration: "~25 min" },
  restorative: { id: "restorative", label: "Full Reset", subtitle: "Flow · Circulation · Recovery",         purpose: "Gentle continuous movement for circulation, joint lubrication, and recovery.",      sections: RESTORATIVE_SECTIONS, duration: "~15 min" },
  morning:     { id: "morning",     label: "Morning Refresh",      subtitle: "Gentle · Spinal · Awakening",           purpose: "Seven movements to wake the spine before you look at your phone.",                  sections: MORNING_SECTIONS,  duration: "~8 min"  },
  evening:     { id: "evening",     label: "Better Sleep Stretch",    subtitle: "Restore · Decompress · Release",        purpose: "Lower cortisol, decompress the spine, prepare for sleep.",                          sections: EVENING_SECTIONS,  duration: "~12 min" },
  desk:        { id: "desk",        label: "The Desk Break",          subtitle: "Desk · Posture · Reset",                purpose: "Six movements to undo an hour of sitting. Stand up. Do it now.",                   sections: DESK_SECTIONS,     duration: "~5 min"  },
  screen:      { id: "screen",      label: "Digital Detox",      subtitle: "Neck · Traps · Upper Back",             purpose: "Undo the forward pull of screen time. Seven targeted releases for the neck and shoulder girdle.", sections: SCREEN_SECTIONS, duration: "~12 min" },
  hip:         { id: "hip",         label: "Happy Hips",         subtitle: "Flexors · Rotators · Adductors",        purpose: "Open the hips, free the lower back, restore the range that sitting steals.",        sections: HIP_SECTIONS,      duration: "~18 min" },
  back:        { id: "back",        label: "Lower Back Soother",     subtitle: "Decompress · Release · Restore",        purpose: "For days when the lower back needs care, not challenge. Gentle traction and release.", sections: BACK_SECTIONS,     duration: "~15 min" },
  steady:      { id: "steady",      label: "Stay Steady",            subtitle: "Balance · Proprioception · Control",    purpose: "Train the systems that prevent falls. Simple movements that are deceptively hard to do well.", sections: STEADY_SECTIONS,   duration: "~15 min" },
  freely:      { id: "freely",      label: "Move Freely",            subtitle: "CARS · Joint Health · Synovial Flow",   purpose: "Controlled Articular Rotations and mobility work for every major joint. The WD-40 session.", sections: FREELY_SECTIONS,   duration: "~20 min" },
  transit:     { id: "transit",     label: "In-Transit",           subtitle: "Seated · Circulation · Calm",           purpose: "Four exercises designed for your seat. Keep circulation moving and the nervous system calm during any long journey.",        sections: TRANSIT_SECTIONS,  duration: "~8 min"  },
  travel:      { id: "travel",      label: "Post-Arrival Reset",    subtitle: "Undo Travel · Decompress · Restore",    purpose: "Six movements to undo the posture of travel. Do these as soon as you arrive.",                                           sections: [{label:"Post-Arrival",tag:"PA",purpose:"Six movements to undo the posture of travel. Do these as soon as you reach your hotel or home.",exercises:[{id:1104,name:"Standing Psoas Release",start:"Standing, about to step into a shallow lunge.",sub:"Hip flexors shortened during travel",type:"flow",seconds:60,steps:[{pos:"A",label:"Shallow Lunge",focus:"SETUP",cue:"Step forward into a shallow lunge. Back knee raised or lowered. Torso upright, feet forward."},{pos:"B",label:"Pelvic Tuck & Lean",focus:"STRETCH",cue:"Tuck the pelvis slightly, lean torso toward the front leg. Feel the stretch at the front of the back hip — this is the psoas."},{pos:"C",label:"Hold & Breathe",focus:"RELEASE",cue:"Hold 30–45 seconds each side. With each exhale, allow the hip to sink further. Switch sides."}]},{id:1105,name:"Wall Slides (W to Y)",start:"Standing with your back flat against a wall.",sub:"Activates lower trapezius — fixes luggage shoulder",type:"reps",reps:"10 slow reps",steps:[{pos:"A",label:"Wall Contact",focus:"SETUP",cue:"Head, upper back, and glutes touching the wall. Arms in a W shape — elbows bent, backs of hands against wall."},{pos:"B",label:"Slide to Y",focus:"ACTIVATE",cue:"Keep backs of hands and elbows on the wall and slowly slide arms up to a Y overhead. Do not let contact break."},{pos:"C",label:"Slow Return",focus:"CONTROL",cue:"Lower to W in 3 seconds. Do not shrug. 10 reps. This reverses upper trap dominance from carrying luggage."}]},{id:1106,name:"Open Book Stretch",start:"Lying on your side, knees stacked at 90°.",sub:"Restores thoracic rotation locked after travel",type:"flow",seconds:60,steps:[{pos:"A",label:"Side-Lying Setup",focus:"SETUP",cue:"Lie on your side, hips and knees at 90°, knees stacked. B[... 2147 chars omitted ...]
  anxiety:     { id: "anxiety",    label: "Calm Circuit",       subtitle: "Breathe · Ground · Regulate",         purpose: "Evidence-based techniques that directly shift the nervous system from fight-or-flight to rest and digest.",       sections: ANXIETY_SECTIONS,  duration: "~15 min" },
  stress:      { id: "stress",     label: "Stress",          subtitle: "Discharge · Release · Restore",        purpose: "Complete the stress cycle the body started. Move the cortisol through. Then downshift.",                        sections: STRESS_SECTIONS,   duration: "~18 min" },
  feet:        { id: "feet",        label: "Feet First",             subtitle: "Release · Activate · Strengthen",      purpose: "PT-backed protocol for plantar fasciitis and foot pain. Release the tissue, wake the muscles, load the chain.", sections: FEET_SECTIONS,     duration: "~18 min" },
  walking:     { id: "walking",     label: "Walking Reset",          subtitle: "Pre-Walk · Post-Walk · Reset",         purpose: "Wake the gait system before the miles, then decompress calves, quads, and arches after.",                      sections: WALKING_SECTIONS,  duration: "~8–10 min" },
  running:     { id: "running",     label: "Running Reset",          subtitle: "Impact · Hips · Recovery",             purpose: "Prime tendons and hips before impact, then restore structure and circulation post-run.",                       sections: RUNNING_SECTIONS,  duration: "~8–12 min" },
  golf:        { id: "golf",        label: "Golf Reset",             subtitle: "Dynamic · Rotational · Recovery",      purpose: "Prepare rotation, wrists, and hips before the first tee, then decompress after the final putt.",               sections: GOLF_SECTIONS,     duration: "~8–10 min" },
  tennis:      { id: "tennis",      label: "Racquet Sports Reset",   subtitle: "Court · Shoulder · Hips",              purpose: "Ready the lateral base and shoulders for court work, then release forearms, hips, and side body after play.",  sections: TENNIS_SECTIONS,   duration: "~8–10 min" },
};
