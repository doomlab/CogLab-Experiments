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
    title: "Paired recall (cued)",
    description:
      "Paired cued recall task, using associates from Underwood (1982; doi:10.3758\u002FBF03202444)",
    repository: "",
    contributors: "Felix Ludwig\nFelix Henninger",
  },
  parameters: {},
  files: {},
  messageHandlers: {},
  responses: {},
  content: [
    {
      type: "lab.html.Screen",
      responses: {
        "keypress(Space)": "Continue",
      },
      messageHandlers: {},
      title: "Welcome",
      content:
        '\u003Cheader\u003E \u003Ch2\u003E Welcome! \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  This study will take around 15 minutes.\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.html.Screen",
      responses: {
        "keypress(Space)": "Continue",
      },
      messageHandlers: {},
      title: "Instructions",
      content:
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  \u003Cdiv class="w-m text-justify"\u003E\r\n    \u003Cp\u003EYour task in this study is to remember word pairs.\r\n    We\'ll first show you two words at a time, and later ask you\r\n    to recall these words in combination.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EOnce you continue, word pairs will be presented to\r\n    you in succession. Are you ready?\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.flow.Loop",
      templateParameters: [
        {
          word1: "rouse",
          word2: "creel",
        },
        {
          word1: "taker",
          word2: "clomb",
        },
        {
          word1: "firth",
          word2: "leach",
        },
        {
          word1: "tinct",
          word2: "gauzy",
        },
        {
          word1: "dross",
          word2: "ephor",
        },
      ],
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Learning phase",
      sample: {
        n: "",
        mode: "draw-shuffle",
      },
      parameters: {},
      files: {},
      shuffleGroups: [],
      template: {
        type: "lab.html.Screen",
        responses: {
          "": "",
        },
        messageHandlers: {},
        title: "Word pair presentation",
        content:
          '\u003Cheader\u003E\r\n  \u003Ch2\u003ELearning phase\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E \r\n  \u003Ctable class="table-plain w-m" style="font-size: 2rem;"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd style="width: 200px"\u003E${ parameters.word1 }\u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E &mdash; \u003C\u002Ftd\u003E\r\n      \u003Ctd style="width: 200px"\u003E${ parameters.word2 }\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E  \r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please memorize this pair of words.\r\n\u003C\u002Ffooter\u003E',
        timeout: "2500",
        parameters: {},
        files: {},
      },
    },
    {
      type: "lab.html.Screen",
      responses: {
        "keypress(Space)": "Continue",
      },
      messageHandlers: {},
      title: "Instructions recall",
      content:
        '\u003Cheader\u003E \u003Ch2\u003E Experiment \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  \u003Cdiv class="w-m text-justify"\u003E\r\n    We\'ll now ask you to recall the words you have just seen in pairs. \u003Cbr\u003E\r\n    One word will be shown, and we\'d ask you to fill in the second.\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.flow.Loop",
      templateParameters: [
        {
          word1: "rouse",
          word2: "creel",
        },
        {
          word1: "taker",
          word2: "clomb",
        },
        {
          word1: "firth",
          word2: "leach",
        },
        {
          word1: "tinct",
          word2: "gauzy",
        },
        {
          word1: "dross",
          word2: "ephor",
        },
      ],
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Recall phase",
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
        messageHandlers: {
          "before:prepare": function anonymous() {
            this.options.parameters["cue"] = this.random.choice(["left", "right"])
          },
        },
        title: "Randomize cue position",
        parameters: {},
        files: {},
        content: [
          {
            type: "lab.html.Form",
            responses: {},
            messageHandlers: {
              "before:prepare": function anonymous() {
                this.options.skip = this.aggregateParameters.cue !== "left"
              },
              end: function anonymous() {
                if (!this.options.skip) {
                  // For evaluation, trim whitespace and
                  // convert words to lower case.
                  this.data["correct"] =
                    this.aggregateParameters.word1.trim().toLowerCase() ===
                    this.data.response.trim().toLowerCase()
                }
              },
            },
            title: "Recall left",
            content:
              '\u003Cheader\u003E\r\n  \u003Ch2\u003EExperiment\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class="table-plain stimulus"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style="width: 50%"\u003E\r\n          \u003Cinput type="text" name="response" autocomplete="off"\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style="width: 50%"\u003E\r\n          ${ parameters.word2 }\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type="submit"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E \r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E  \r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field.\r\n\u003C\u002Ffooter\u003E',
            parameters: {},
            files: {},
          },
          {
            type: "lab.html.Form",
            responses: {},
            messageHandlers: {
              "before:prepare": function anonymous() {
                this.options.skip = this.aggregateParameters.cue !== "right"
              },
              end: function anonymous() {
                if (!this.options.skip) {
                  // For evaluation, trim whitespace and
                  // convert words to lower case.
                  this.data["correct"] =
                    this.aggregateParameters.word2.trim().toLowerCase() ===
                    this.data.response.trim().toLowerCase()
                }
              },
            },
            title: "Recall right",
            content:
              '\u003Cheader\u003E\r\n  \u003Ch2\u003EExperiment\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E \r\n  \u003Cform\u003E\r\n\r\n    \u003Ctable class="table-plain stimulus"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style="width: 50%"\u003E\r\n          ${ parameters.word1 }\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style="width: 50%"\u003E\r\n          \u003Cinput type="text" name="response" autocomplete="off"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type="submit"\u003ESubmit\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the missing word in the provided field.\r\n\u003C\u002Ffooter\u003E',
            parameters: {},
            files: {},
          },
          {
            type: "lab.html.Screen",
            responses: {
              "": "",
            },
            messageHandlers: {
              "before:prepare": function anonymous() {
                this.options.timeout = this.options.datastore.get("correct") ? 1500 : 2500
              },
            },
            title: "Feedback",
            content:
              '\u003Cheader\u003E\n  \u003Ch2\u003EExperiment\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E \n  \u003Cform\u003E\n    \u003C!-- \n      Please remove this part if you\n      would rather not provide feedback\n    --\u003E\n    \u003Ctable \n      class="table-plain stimulus"\n      style="color: ${ state.correct ? \'green\' : \'red\'}"\n    \u003E\n      \u003Ctr\u003E\n        \u003Ctd style="width: 50%"\u003E\n          ${ parameters.word1 }\n        \u003C\u002Ftd\u003E\n        \u003Ctd\u003E\n          &mdash;\n        \u003C\u002Ftd\u003E\n        \u003Ctd style="width: 50%"\u003E\n          ${ parameters.word2 }\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan="3" style="font-size: 1.25rem; padding: 1rem"\u003E\n          ${ state.correct \n            ? \'Well done!\' \n            : \'Please memorize this pair again.\' }\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please enter the missing word in the provided field.\n\u003C\u002Ffooter\u003E',
            tardy: true,
            parameters: {},
            files: {},
          },
        ],
      },
    },
    {
      type: "lab.html.Screen",
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "End",
      content:
        '\u003Cheader\u003E \u003Ch2\u003E Thanks! \u003C\u002Fh2\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  Thank you very much for your participation!\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  You can now close this window.\r\n\u003C\u002Ffooter\u003E',
      timeout: "10",
      parameters: {},
      files: {},
    },
  ],
})

// Let's go!
study.run()
