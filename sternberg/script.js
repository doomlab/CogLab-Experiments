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
    title: "Sternberg Paradigm",
    description:
      "Implemented following Sternberg (1966), Experiment 1, shortened slightly for demonstration purposes\n\nSternberg, S. (1966). High-speed scanning in human memory. Science, 153(3736), 652-654.",
    repository: "",
    contributors: "Felix Ludwig\nFelix Henninger",
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
        '\u003Cheader\u003E\n  \u003Ch2\u003EYour task\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\n  \u003Cdiv class="w-m text-justify"\u003E\n    \u003Cp class="font-weight-bold"\u003EIn the following, your task will be to memorize a sequence of digits.\u003C\u002Fp\u003E\n    \u003Cp\u003EThe length of this sequence can vary from one to six digits. After the presentation, we will ask you to indicate whether a certain digit was included in the sequence. Please do so by pressing \u003Ckbd\u003Ey\u003C\u002Fkbd\u003E, if you think that the digit was in the set. If not, please press \u003Ckbd\u003En\u003C\u002Fkbd\u003E.\u003C\u002Fp\u003E\n    \u003Cp\u003EOnce you have made your decision, we will ask you to type in the entire sequence. There will be a total of sixty sequences in this experiment.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class="content-horizontal-right"\u003E\n  \u003Cbutton id="continue"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E',
    },
    {
      type: "lab.flow.Loop",
      files: {},
      parameters: {},
      templateParameters: [
        {
          sequence_length: "1",
          "": "",
        },
        {
          sequence_length: "2",
          "": "",
        },
        {
          sequence_length: "3",
          "": "",
        },
        {
          sequence_length: "4",
          "": "",
        },
        {
          sequence_length: "5",
          "": "",
        },
        {
          sequence_length: "6",
          "": "",
        },
      ],
      sample: {
        mode: "draw-shuffle",
        n: "60",
      },
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Sternberg task",
      shuffleGroups: [],
      template: {
        type: "lab.flow.Sequence",
        files: {},
        parameters: {},
        responses: {
          "": "",
        },
        messageHandlers: {
          "before:prepare": function anonymous() {
            const stimuli = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

            // Draw a sequence at random
            const sequence = this.random.sample(stimuli, this.parameters.sequence_length)
            // Decide on the type of probe
            const probeType = this.random.choice(["positive", "negative"])
            // Use the remaining stimuli as distractors
            const distractors = stimuli.filter((x) => !sequence.includes(x))
            // Draw a probe
            const probe =
              probeType === "positive"
                ? this.random.choice(sequence)
                : this.random.choice(distractors)

            // Save data as parameters
            this.parameters.sequence = sequence
            this.parameters.probe_type = probeType
            this.parameters.probe = probe
          },
        },
        title: "Trial",
        content: [
          {
            type: "lab.canvas.Frame",
            context:
              '\u003C!-- Nested components use this canvas --\u003E\n\u003Cmain\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class="content-horizontal-center content-vertical-center"\u003E\n  Please memorize these digits.\n\u003C\u002Ffooter\u003E',
            contextSelector: "canvas",
            files: {},
            parameters: {},
            responses: {
              "": "",
            },
            messageHandlers: {},
            title: "Presentation frame",
            content: {
              type: "lab.flow.Sequence",
              files: {},
              parameters: {},
              responses: {
                "": "",
              },
              messageHandlers: {},
              title: "Presentation sequence",
              content: [
                {
                  type: "lab.canvas.Screen",
                  content: [
                    {
                      type: "i-text",
                      left: 0,
                      top: 0,
                      angle: 0,
                      width: 162.12,
                      height: 43.93,
                      stroke: null,
                      strokeWidth: 1,
                      fill: "black",
                      text: "Please press space\nto see the sequence",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "18",
                      fontFamily: "sans-serif",
                      lineHeight: 1.25,
                      textAlign: "center",
                    },
                  ],
                  files: {},
                  parameters: {},
                  responses: {
                    "keydown(Space)": "continue",
                  },
                  messageHandlers: {},
                  viewport: [800, 600],
                  title: "Pause",
                },
                {
                  type: "lab.flow.Loop",
                  files: {},
                  parameters: {},
                  templateParameters: [
                    {
                      digit_position: "1",
                      "": "",
                    },
                    {
                      digit_position: "2",
                      "": "",
                    },
                    {
                      digit_position: "3",
                      "": "",
                    },
                    {
                      digit_position: "4",
                      "": "",
                    },
                    {
                      digit_position: "5",
                      "": "",
                    },
                    {
                      digit_position: "6",
                      "": "",
                    },
                    {
                      digit_position: "7",
                      "": "",
                    },
                    {
                      digit_position: "8",
                      "": "",
                    },
                    {
                      digit_position: "9",
                      "": "",
                    },
                    {
                      digit_position: "10",
                      "": "",
                    },
                  ],
                  sample: {
                    mode: "sequential",
                    n: "",
                  },
                  responses: {
                    "": "",
                  },
                  messageHandlers: {
                    "before:prepare": function anonymous() {
                      this.options.sample.n = this.parameters.sequence_length
                    },
                  },
                  title: "Digit loop",
                  shuffleGroups: [],
                  template: {
                    type: "lab.canvas.Screen",
                    content: [
                      {
                        type: "i-text",
                        left: 0,
                        top: 0,
                        angle: 0,
                        width: 323.98,
                        height: 36.16,
                        stroke: null,
                        strokeWidth: 1,
                        fill: "black",
                        text: "${ this.parameters.digit }",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "42",
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
                    messageHandlers: {
                      "before:prepare": function anonymous() {
                        this.parameters.digit =
                          this.parameters.sequence[this.parameters.digit_position - 1]
                      },
                    },
                    viewport: [800, 600],
                    title: "Digit presentation",
                    timeout: "1200",
                  },
                },
              ],
            },
          },
          {
            type: "lab.canvas.Frame",
            context:
              '\u003C!-- Nested components use this canvas --\u003E\n\u003Cmain\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class="content-horizontal-center content-vertical-center"\u003E\n  Please recall the digits you saw.\n\u003C\u002Ffooter\u003E',
            contextSelector: "canvas",
            files: {},
            parameters: {},
            responses: {
              "": "",
            },
            messageHandlers: {},
            title: "Recall frame",
            content: {
              type: "lab.flow.Sequence",
              files: {},
              parameters: {},
              responses: {
                "": "",
              },
              messageHandlers: {},
              title: "Recall sequence",
              content: [
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
                  title: "Retention interval",
                  timeout: "2000",
                },
                {
                  type: "lab.canvas.Screen",
                  content: [
                    {
                      type: "i-text",
                      left: 0,
                      top: 0,
                      angle: 0,
                      width: 30.37,
                      height: 58.76,
                      stroke: null,
                      strokeWidth: 1,
                      fill: "black",
                      text: "+",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "52",
                      fontFamily: "sans-serif",
                      lineHeight: 1.16,
                      textAlign: "center",
                    },
                    {
                      type: "i-text",
                      left: 0,
                      top: 75,
                      angle: 0,
                      width: 284.92,
                      height: 18.08,
                      stroke: null,
                      strokeWidth: 1,
                      fill: "black",
                      text: "Was this digit included in the sequence?",
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
                  title: "Warning signal \u002F fixation cross",
                  timeout: "500",
                },
                {
                  type: "lab.canvas.Screen",
                  content: [
                    {
                      type: "i-text",
                      left: 0,
                      top: 0,
                      angle: 0,
                      width: 520.53,
                      height: 47.46,
                      stroke: null,
                      strokeWidth: 1,
                      fill: "black",
                      text: "${ this.parameters.probe }",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "42",
                      fontFamily: "sans-serif",
                      lineHeight: 1.16,
                      textAlign: "center",
                    },
                    {
                      type: "i-text",
                      left: 0,
                      top: 75,
                      angle: 0,
                      width: 284.92,
                      height: 18.08,
                      stroke: null,
                      strokeWidth: 1,
                      fill: "black",
                      text: "Was this digit included in the sequence?",
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
                    "keydown(y)": "positive",
                    "keydown(n)": "negative",
                  },
                  messageHandlers: {},
                  viewport: [800, 600],
                  title: "Probe",
                  correctResponse: "${ this.parameters.probe_type }",
                },
                {
                  type: "lab.canvas.Screen",
                  content: [
                    {
                      type: "circle",
                      left: 0,
                      top: 0,
                      angle: 0,
                      width: 55,
                      height: 55,
                      stroke: null,
                      strokeWidth: 1,
                      fill: "${ this.state.correct ? 'green' : 'red' }",
                    },
                    {
                      type: "i-text",
                      left: 0,
                      top: 75,
                      angle: 0,
                      width: 284.92,
                      height: 18.08,
                      stroke: null,
                      strokeWidth: 1,
                      fill: "black",
                      text: "Was this digit included in the sequence?",
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
                  timeout: "2000",
                },
              ],
            },
          },
          {
            type: "lab.html.Form",
            content:
              '\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\n  \u003Cdiv class="m-w"\u003E\n    \u003Cp\u003E\n      \u003Cstrong\u003EPlease recall\u003Cbr\u003E\n      the entire sequence in order,\u003C\u002Fstrong\u003E\u003Cbr\u003E\n      as best you can.\n    \u003C\u002Fp\u003E\n    \u003Cform id="recall" autocomplete="off"\u003E\n      \u003Cinput\n        name="sequence_recall"\n        autofocus\n        style="\n          font-size: 72px;\n          text-align: center;\n          letter-spacing: 18px;\n        "\n      \u003E\n    \u003C\u002Fform\u003E\n    \u003Cp\u003E\n      Press \u003Ckbd\u003EEnter\u003C\u002Fkbd\u003E to continue\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class="content-horizontal-center content-vertical-center"\u003E\n  &nbsp;\n\u003C\u002Ffooter\u003E\n',
            files: {},
            parameters: {},
            responses: {
              "": "",
            },
            messageHandlers: {
              end: function anonymous() {
                this.data.response = this.data.sequence_recall
                  .split("")
                  .filter((x) => x.match(/\d/))
                  .map((x) => Number(x))

                delete this.data.sequence_recall

                this.data.correct =
                  this.data.response.length === this.parameters.sequence.length &&
                  this.parameters.sequence.every((x, i) => x === this.data.response[i])
              },
            },
            title: "Full sequence recall",
          },
        ],
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
