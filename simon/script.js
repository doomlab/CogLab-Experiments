// Define study
const study = lab.util.fromObject({
  title: "root",
  type: "lab.flow.Sequence",
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
    title: "Simon task",
    description: "",
    repository: "",
    contributors: "Michael Kriechbaumer\nFelix Henninger",
  },
  parameters: {},
  files: {},
  messageHandlers: {},
  responses: {},
  content: [
    {
      type: "lab.html.Screen",
      responses: {
        "click button": "continue",
      },
      messageHandlers: {},
      title: "Instructions",
      content:
        '\u003Cheader\u003E\n  \u003Ch1\u003EYour task\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\n  \u003Cdiv class="w-m text-justify"\u003E\n    \u003Cp\u003EIn the following, you\'re going to see dots of different colors on the screen &mdash; either blue or green. Your task is to indicate the color of the dot, as quickly as you can while staying accurate. Please press the \u003Ckbd\u003ES\u003C\u002Fkbd\u003E key if you see a blue dot, and \u003Ckbd\u003EL\u003C\u002Fkbd\u003E if you see a green dot. \n    \u003C\u002Fp\u003E\n    \u003Chr\u003E\n    \u003Cp\u003EThe dot will appear in one of several horizontal positions. You don\'t need to pay attention to the position &mdash; the color is all that counts.\u003C\u002Fp\u003E\n    \u003Cimg src="${ this.files[\'simon_green.svg\'] }" style="width: 100%"\u003E\n    \u003Cp\u003EDuring the task, we won\'t show you the unoccupied places, just a single dot at a time. Again, please indicate its color, regardless of position.\u003C\u002Fp\u003E\n    \u003Cimg src="${ this.files[\'simon_blue.svg\'] }" style="width: 100%"\u003E\n    \u003Cp\u003EPlease click on the button below to start the task\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class="content-horizontal-right"\u003E\n  \u003Cbutton id="continue"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E',
      notes: "Instruction",
      parameters: {},
      files: {
        "simon_green.svg":
          "embedded\u002F9fa89c4e3dba7098b2ca91aed62d20c707369b93b3dd7af96a56e85b071a7634.svg",
        "simon_blue.svg":
          "embedded\u002Fe031f99402d1ebdfb1276e246c3aa118869b0fd1cf9c66924d52ed1faf493567.svg",
      },
    },
    {
      type: "lab.canvas.Frame",
      context:
        "\u003C!-- Nested components use this canvas --\u003E\n\u003Cmain\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ES\u003C\u002Fkbd\u003E for blue and \u003Ckbd\u003EL\u003C\u002Fkbd\u003E for green.\n\u003C\u002Ffooter\u003E",
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
        templateParameters: [
          {
            position: -200,
            color: "blue",
            congruency: "congruent",
            power: "strong",
          },
          {
            position: -200,
            color: "blue",
            congruency: "congruent",
            power: "strong",
          },
          {
            position: -200,
            color: "blue",
            congruency: "congruent",
            power: "strong",
          },
          {
            position: -200,
            color: "blue",
            congruency: "congruent",
            power: "strong",
          },
          {
            position: -100,
            color: "blue",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: -100,
            color: "blue",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: -100,
            color: "blue",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: -100,
            color: "blue",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: 0,
            color: "blue",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 0,
            color: "blue",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 0,
            color: "blue",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 0,
            color: "blue",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 100,
            color: "blue",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: 100,
            color: "blue",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: 100,
            color: "blue",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: 100,
            color: "blue",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: 200,
            color: "blue",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: 200,
            color: "blue",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: 200,
            color: "blue",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: 200,
            color: "blue",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: -200,
            color: "green",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: -200,
            color: "green",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: -200,
            color: "green",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: -200,
            color: "green",
            congruency: "incongruent",
            power: "strong",
          },
          {
            position: -100,
            color: "green",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: -100,
            color: "green",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: -100,
            color: "green",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: -100,
            color: "green",
            congruency: "incongruent",
            power: "weak",
          },
          {
            position: 0,
            color: "green",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 0,
            color: "green",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 0,
            color: "green",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 0,
            color: "green",
            congruency: "neutral",
            power: "neutral",
          },
          {
            position: 100,
            color: "green",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: 100,
            color: "green",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: 100,
            color: "green",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: 100,
            color: "green",
            congruency: "congruent",
            power: "weak",
          },
          {
            position: 200,
            color: "green",
            congruency: "congruent",
            power: "strong",
          },
          {
            position: 200,
            color: "green",
            congruency: "congruent",
            power: "strong",
          },
          {
            position: 200,
            color: "green",
            congruency: "congruent",
            power: "strong",
          },
          {
            position: 200,
            color: "green",
            congruency: "congruent",
            power: "strong",
          },
        ],
        responses: {
          "": "",
        },
        messageHandlers: {},
        title: "Simon task",
        notes:
          "Trials consist of five bullet bullet points in a horizontal line.\nOne of the points is colored either [b]lue or [g]reen.\nThe color determines the correct response.\nThe colored point's position changes each trial. \nColor and position can either be [congruent], [incongruent] or [neutral].\nThe congruency's power can be [strong], [weak] or [neutral], depending on whether the colored point is on the edge, next to the center or in the center.",
        parameters: {},
        files: {},
        sample: {
          mode: "draw-shuffle",
        },
        shuffleGroups: [],
        template: {
          type: "lab.flow.Sequence",
          responses: {
            "": "",
          },
          messageHandlers: {},
          title: "Trial",
          notes:
            "Sequence of screens to be looped, Consists of an empty screen before each trial, the trial screen and a feedback screen.",
          parameters: {},
          files: {},
          content: [
            {
              type: "lab.canvas.Screen",
              content: [
                {
                  type: "i-text",
                  left: 0,
                  top: 0,
                  angle: 0,
                  width: 18.05,
                  height: 36.16,
                  stroke: null,
                  strokeWidth: 1,
                  fill: "black",
                  text: "+",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "48",
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
              title: "Fixation cross",
              timeout: "250",
            },
            {
              type: "lab.canvas.Screen",
              content: [
                {
                  type: "circle",
                  left: "${ this.parameters.position }",
                  top: 0,
                  angle: 0,
                  width: "50",
                  height: 55,
                  stroke: null,
                  strokeWidth: 1,
                  fill: "${ this.parameters.color }",
                },
              ],
              files: {},
              parameters: {},
              responses: {
                "keydown(s)": "blue",
                "keydown(l)": "green",
              },
              messageHandlers: {},
              viewport: [800, 600],
              title: "Simon screen",
              correctResponse: "${ this.parameters.color }",
            },
            {
              type: "lab.canvas.Screen",
              content: [
                {
                  type: "i-text",
                  left: 0,
                  top: 0,
                  angle: 0,
                  width: 342.44,
                  height: 22.6,
                  stroke: null,
                  strokeWidth: 1,
                  fill: "black",
                  text: '${ this.state.correct ? "" : "Ooops!"}',
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "20",
                  fontFamily: "sans-serif",
                  lineHeight: 1.16,
                  textAlign: "center",
                },
                {
                  type: "i-text",
                  left: 0,
                  top: 40,
                  angle: 0,
                  width: 564.92,
                  height: 18.08,
                  stroke: null,
                  strokeWidth: 1,
                  fill: "black",
                  text: '${ this.state.correct ? "" : "Make sure you indicate the color of the dot correctly."}',
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16",
                  fontFamily: "sans-serif",
                  lineHeight: 1.16,
                  textAlign: "center",
                },
                {
                  type: "i-text",
                  left: 0,
                  top: 65,
                  angle: 0,
                  width: 558.12,
                  height: 18.08,
                  stroke: null,
                  strokeWidth: 1,
                  fill: "black",
                  text: '${ this.state.correct ? "" : "Please review the instructions below if you need to."}',
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16",
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
              title: "Feedback",
              tardy: true,
              timeout: "${ this.state.correct ? 500 : 2000}",
            },
          ],
        },
      },
    },
    {
      type: "lab.html.Screen",
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Thanks",
      notes: "Finishing the experiment and offering download of data (to be included)",
      content:
        '\u003Cheader\u003E\r\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\r\n  \u003Cdiv class="m-w text-center"\u003E\r\n    \u003Cp\u003E\u003Cstrong\u003EThe experiment is now complete.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n    \u003Cp\u003EThank you for taking the time!\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter\u003E\r\n  \u003Cp\u003EYou can now close this window.\u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
  ],
})

// Let's go!
study.run()
