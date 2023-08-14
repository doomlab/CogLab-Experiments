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
    title: "Paired recall (free)",
    description: "",
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
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EWelcome!\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  This study will take around 15 minutes.\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E',
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
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  \u003Cdiv class="w-m text-justify"\u003E\r\n    \u003Cp\u003EYour task in this study will be to remember word pairs.\r\n    We\'ll first show you two words at a time, and later ask you\r\n    to recall these words in combination.\u003C\u002Fp\u003E\r\n    \u003Cp\u003EIf you continue, word pairs will be presented to\r\n    you in succession. Are you ready?\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E',
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
      parameters: {},
      files: {},
      sample: {
        mode: "draw-shuffle",
      },
      shuffleGroups: [],
      template: {
        type: "lab.html.Screen",
        responses: {
          "": "",
        },
        messageHandlers: {},
        title: "Word pair",
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
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EExperiment\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  \u003Cdiv class="w-m text-justify"\u003E\r\n    We\'ll now ask you to recall the words you have just seen in pairs.\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.flow.Loop",
      templateParameters: [
        {
          Repetitions: "1",
        },
      ],
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Recall phase",
      parameters: {},
      sample: {
        n: "100",
        mode: "draw-replace",
      },
      files: {},
      shuffleGroups: [],
      template: {
        type: "lab.html.Form",
        responses: {
          "": "",
        },
        messageHandlers: {
          "before:prepare": function anonymous() {
            this.options.events["click button#done"] = function () {
              this.submit()
              this.parent.end()
            }
          },
        },
        title: "Recall",
        content:
          '\u003Cheader\u003E\r\n  \u003Ch2\u003EExperiment\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E \r\n  \u003Cform\u003E\r\n    \u003Ctable class="table-plain stimulus"\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd style="width: 50%"\u003E\r\n          \u003Cinput type="text" name="word1"\u003E\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          &mdash;\r\n        \u003C\u002Ftd\u003E\r\n        \u003Ctd style="width: 50%"\u003E\r\n          \u003Cinput type="text" name="word2"\u003E\r\n        \u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n      \u003Ctr\u003E\r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n        \u003Ctd\u003E\r\n          \u003Cbutton type="submit" style="width: 200px"\u003ESubmit entry\u003C\u002Fbutton\u003E\u003Cbr\u003E\r\n          \u003Cbutton id="done" style="width: 200px"\u003EDone\u003C\u002Fbutton\u003E\r\n        \u003C\u002Ftd\u003E \r\n        \u003Ctd\u003E\u003C\u002Ftd\u003E\r\n      \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E  \r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please enter the pairs of words you just saw. After each pair, please use the \u003Ckbd\u003Esubmit\u003C\u002Fkbd\u003E button to save your entry. \u003Cbr\u003E\r\n  When you have submitted all pairs you remember, please click \u003Ckbd\u003Edone\u003C\u002Fkbd\u003E to complete the study.\r\n\u003C\u002Ffooter\u003E',
        parameters: {},
        files: {},
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
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EThanks!\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  Thank you very much for your participation!\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  You can now close this window.\r\n\u003C\u002Ffooter\u003E',
      timeout: "10",
      parameters: {},
      files: {},
    },
  ],
})

// Let's go!
study.run()
