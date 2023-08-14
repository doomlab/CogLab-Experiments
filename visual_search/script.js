// Define study
const study = lab.util.fromObject({
  title: "root",
  type: "lab.flow.Sequence",
  parameters: {},
  plugins: [
    {
      type: "lab.plugins.Metadata",
      path: undefined,
    },
    {
      type: "lab.plugins.Transmit",
      url: "backend.php",
      path: undefined,
    },
  ],
  metadata: {
    title: "Visual search task",
    description: "",
    repository: "",
    contributors: "Michael Kriechbaumer\nFelix Henninger",
  },
  messageHandlers: {},
  files: {},
  responses: {},
  content: [
    {
      type: "lab.html.Screen",
      files: {},
      parameters: {},
      responses: {
        "click button": "continue",
      },
      messageHandlers: {},
      title: "Instructions",
      content:
        '\u003Cheader\u003E\n  \u003Ch1\u003EYour task\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\n  \u003Cdiv class="w-m text-justify"\u003E\n    \u003Cp\u003EIn the following, your task is to indicate whether a figure contains the letter \u003Cstrong\u003ET\u003C\u002Fstrong\u003E, hidden among a number of \u003Cstrong\u003EL\u003C\u002Fstrong\u003Es.\u003C\u002Fp\u003E\n    \u003Cp\u003EIf you spot a \u003Cstrong\u003ET\u003C\u002Fstrong\u003E, please indicate its presence using the \u003Ckbd\u003EY\u003C\u002Fkbd\u003E key; otherwise, please use \u003Ckbd\u003EN\u003C\u002Fkbd\u003E if only the figure contains only the letter \u003Cstrong\u003EL\u003C\u002Fstrong\u003E. Please answer as quickly as you can while remaining accurate.\u003C\u002Fp\u003E\n    \u003Cp\u003EPlease keep the index fingers of you left and right hands on the \u003Ckbd\u003EY\u003C\u002Fkbd\u003E and \u003Ckbd\u003EN\u003C\u002Fkbd\u003E keys throughout the task. The task will start when you klick on the button below.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class="content-horizontal-right"\u003E\n  \u003Cbutton id="continue"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E',
    },
    {
      type: "lab.canvas.Frame",
      context:
        '\u003Cmain\u003E\n  \u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class="content-vertical-center content-horizontal-center"\u003E\n  \u003Cp\u003E\n    Is there a \u003Cstrong\u003ET\u003C\u002Fstrong\u003E among the letters?\u003Cbr\u003E\n    Press \u003Ckbd\u003EY\u003C\u002Fkbd\u003E for \u003Cem\u003Eyes\u003C\u002Fem\u003E and \u003Ckbd\u003EN\u003C\u002Fkbd\u003E for \u003Cem\u003Eno\u003C\u002Fem\u003E.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E',
      contextSelector: "canvas",
      files: {},
      parameters: {},
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Frame",
      content: {
        type: "lab.flow.Loop",
        files: {},
        parameters: {},
        templateParameters: [
          {
            set_size: 10,
            target_present: false,
          },
          {
            set_size: 10,
            target_present: false,
          },
          {
            set_size: 10,
            target_present: true,
          },
          {
            set_size: 10,
            target_present: true,
          },
          {
            set_size: 15,
            target_present: false,
          },
          {
            set_size: 15,
            target_present: false,
          },
          {
            set_size: 15,
            target_present: true,
          },
          {
            set_size: 15,
            target_present: true,
          },
          {
            set_size: 20,
            target_present: false,
          },
          {
            set_size: 20,
            target_present: false,
          },
          {
            set_size: 20,
            target_present: true,
          },
          {
            set_size: 20,
            target_present: true,
          },
          {
            set_size: 25,
            target_present: false,
          },
          {
            set_size: 25,
            target_present: false,
          },
          {
            set_size: 25,
            target_present: true,
          },
          {
            set_size: 25,
            target_present: true,
          },
          {
            set_size: 30,
            target_present: false,
          },
          {
            set_size: 30,
            target_present: false,
          },
          {
            set_size: 30,
            target_present: true,
          },
          {
            set_size: 30,
            target_present: true,
          },
          {
            set_size: 35,
            target_present: false,
          },
          {
            set_size: 35,
            target_present: false,
          },
          {
            set_size: 35,
            target_present: true,
          },
          {
            set_size: 35,
            target_present: true,
          },
        ],
        sample: {
          mode: "draw-shuffle",
          n: "",
        },
        responses: {
          "": "",
        },
        messageHandlers: {},
        title: "Visual search task",
        shuffleGroups: [],
        template: {
          type: "lab.flow.Sequence",
          files: {},
          parameters: {},
          responses: {
            "": "",
          },
          messageHandlers: {},
          title: "Trial",
          content: [
            {
              type: "lab.canvas.Screen",
              content: [
                {
                  type: "rect",
                  left: 0,
                  top: 0,
                  angle: 0,
                  width: "225",
                  height: "225",
                  stroke: "#aaaaaa",
                  strokeWidth: 2,
                  fill: "transparent",
                },
                {
                  type: "i-text",
                  left: 0,
                  top: 0,
                  angle: 0,
                  width: 18.69,
                  height: 36.16,
                  stroke: null,
                  strokeWidth: 1,
                  fill: "black",
                  text: "+",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 32,
                  fontFamily: "sans-serif",
                  lineHeight: 1.16,
                  textAlign: "center",
                },
              ],
              files: {},
              parameters: {},
              responses: {
                "": "",
              },
              messageHandlers: {},
              viewport: [800, 600],
              title: "Fixation",
              timeout: "500",
            },
            {
              type: "lab.canvas.Screen",
              content: [
                {
                  type: "rect",
                  left: 0,
                  top: 0,
                  angle: 0,
                  width: "225",
                  height: "225",
                  stroke: "#aaaaaa",
                  strokeWidth: 2,
                  fill: "transparent",
                },
              ],
              files: {},
              parameters: {},
              responses: {
                "keydown(y)": "yes",
                "keydown(n)": "no",
              },
              messageHandlers: {
                "before:prepare": function anonymous() {
                  // Preparation ----------------------------------------------------

                  // Enumerate all possible positions and rotations.
                  // Because we place stimuli on a 10x10 grid, there
                  // are 100 possible positions.
                  const positions = Array(100)
                    .fill()
                    .map((_, i) => i)
                  const rotations = [0, 45, 90, 135, 180, 225, 270, 315]

                  // Extract the stimulus parameters from the study state
                  const targetPresent = this.parameters.target_present

                  // If a target is present, we need to generate
                  // one additional item
                  const setSize = targetPresent
                    ? this.parameters.set_size + 1
                    : this.parameters.set_size

                  // Stimulus generation --------------------------------------------

                  const draw_stimulus = (position, rotation, content) => {
                    const x = (position % 10) * 20 - 100
                    const y = Math.floor(position / 10) * 20 - 100

                    this.options.content.push({
                      type: "text",
                      left: x,
                      top: y,
                      angle: rotation,
                      text: content,
                      fontSize: 16,
                      fontFamily: "Helvetica, Arial, Sans-Serif",
                      fill: "black",
                    })
                  }

                  // Sample positions and rotations
                  const item_positions = this.random.sample(
                    positions,
                    setSize,
                    false // without replacement
                  )
                  const item_rotations = this.random.sample(
                    rotations,
                    setSize,
                    true // *with* replacement
                  )

                  // Render the target first
                  if (targetPresent) {
                    draw_stimulus(item_positions.pop(), item_rotations.pop(), "T")
                  }

                  // Render the distractor items one by one
                  item_positions.forEach((position, i) => {
                    draw_stimulus(position, item_rotations[i], "L")
                  })
                },
              },
              viewport: [800, 600],
              title: "Stimulus",
              correctResponse: "${ this.parameters.target_present ? 'yes' : 'no' }",
            },
            {
              type: "lab.canvas.Screen",
              content: [],
              files: {},
              parameters: {},
              responses: {
                "": "",
              },
              messageHandlers: {},
              viewport: [800, 600],
              title: "Inter-trial interval",
              timeout: "1000",
            },
          ],
        },
      },
    },
    {
      type: "lab.html.Screen",
      files: {},
      parameters: {},
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Thanks",
      content:
        '\u003Cheader\u003E\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\n  \u003Cdiv class="m-w text-center"\u003E\n    \u003Cp\u003E\u003Cstrong\u003EThe experiment is now complete.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003EThank you for taking the time!\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cp\u003EYou can now close this window.\u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E',
    },
  ],
})

// Let's go!
study.run()
