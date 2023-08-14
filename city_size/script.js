// Define study
const study = lab.util.fromObject({
  messageHandlers: {},
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
    title: "City Size Judgment",
    description:
      "Experiment for  the fast-and-frugal recognition heuristic (RH) with the comparsion of city sizes. City names were taken from:\n\nHilbig, B. E. (2008). Individual differences in fast-and-frugal decision making: Neuroticism and the recognition heuristic. Journal of Research in Personality, 42(6), 1641-1645.",
    repository: "",
    contributors: "Felix Ludwig\nFelix Henninger\nMichael Kriechbaumer",
  },
  parameters: {},
  files: {},
  responses: {},
  content: [
    {
      type: "lab.html.Screen",
      responses: {
        "keypress(Space)": "continue",
      },
      messageHandlers: {
        run: function anonymous() {
          const ds = this.options.datastore

          ds.set("RandomNumber", Math.ceil(Math.random() * 2))
        },
      },
      title: "Welcome",
      content:
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EWelcome!\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\r\n  \u003Cdiv class="w-m text-justify"\u003E\r\n    This experiment will take about 5 minutes.\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E\r\n  to proceed to the instructions.\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.html.Screen",
      responses: {
        "keypress(Space)": "continue",
      },
      messageHandlers: {},
      title: "Instructions judgment",
      content:
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EYour task\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\r\n  \u003Cdiv class="w-m text-justify"\u003E\r\n    \u003Cp\u003EIn this experiment we will ask you to compare several cities by their population. The names of two cities will be shown side by side, and your task will be to judge which one you think is larger, based on the number of inhabitants.\u003C\u002Fp\u003E\r\n    \r\n    \u003Cp\u003EIf you think the left city has a larger population than the right, please indicate this by pressing the \u003Ckbd\u003Es\u003C\u002Fkbd\u003E key. Likewise, please press the \u003Ckbd\u003El\u003C\u002Fkbd\u003E key if you think that the population of the right city is larger. Please provide your answers quickly and intuitively. Take a guess if you are not sure about the correct answer. \u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003EAfter you have given your judgements we will ask you some further questions about the cities presented in the experiment.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E\r\n  to begin the experiment.\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.html.Screen",
      responses: {
        "keypress(s)": "continue",
        "keypress(l)": "continue",
      },
      messageHandlers: {},
      title: "Experiment",
      content:
        '\u003Cheader\u003E\r\n  \u003Ch2\u003EReady?\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\r\n  \u003Cdiv class="w-m text-justify"\u003E\r\n    Please now place your fingers on the \u003Ckbd\u003Es\u003C\u002Fkbd\u003E and \u003Ckbd\u003El\u003C\u002Fkbd\u003E keys.\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Start the experiment by pressing either \r\n  \u003Ckbd\u003Es\u003C\u002Fkbd\u003E or \u003Ckbd\u003El\u003C\u002Fkbd\u003E.\r\n\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.flow.Loop",
      templateParameters: [
        {
          cityA: "Delhi",
          cityB: "Jakarta",
        },
        {
          cityA: "Delhi",
          cityB: "Kinshasa",
        },
        {
          cityA: "Delhi",
          cityB: "Bogotá",
        },
        {
          cityA: "Delhi",
          cityB: "Bangalore",
        },
        {
          cityA: "Delhi",
          cityB: "Saint Petersburg",
        },
        {
          cityA: "Delhi",
          cityB: "Chengdu",
        },
        {
          cityA: "Delhi",
          cityB: "Ahmedabad",
        },
        {
          cityA: "Delhi",
          cityB: "Ibadan",
        },
        {
          cityA: "Delhi",
          cityB: "Saigon",
        },
        {
          cityA: "Delhi",
          cityB: "Harbin",
        },
        {
          cityA: "Jakarta",
          cityB: "Kinshasa",
        },
        {
          cityA: "Jakarta",
          cityB: "Bogotá",
        },
        {
          cityA: "Jakarta",
          cityB: "Bangalore",
        },
        {
          cityA: "Jakarta",
          cityB: "Saint Petersburg",
        },
        {
          cityA: "Jakarta",
          cityB: "Chengdu",
        },
        {
          cityA: "Jakarta",
          cityB: "Ahmedabad",
        },
        {
          cityA: "Jakarta",
          cityB: "Ibadan",
        },
        {
          cityA: "Jakarta",
          cityB: "Saigon",
        },
        {
          cityA: "Jakarta",
          cityB: "Harbin",
        },
        {
          cityA: "Kinshasa",
          cityB: "Bogotá",
        },
        {
          cityA: "Kinshasa",
          cityB: "Bangalore",
        },
        {
          cityA: "Kinshasa",
          cityB: "Saint Petersburg",
        },
        {
          cityA: "Kinshasa",
          cityB: "Chengdu",
        },
        {
          cityA: "Kinshasa",
          cityB: "Ahmedabad",
        },
        {
          cityA: "Kinshasa",
          cityB: "Ibadan",
        },
        {
          cityA: "Kinshasa",
          cityB: "Saigon",
        },
        {
          cityA: "Kinshasa",
          cityB: "Harbin",
        },
        {
          cityA: "Bogotá",
          cityB: "Bangalore",
        },
        {
          cityA: "Bogotá",
          cityB: "Saint Petersburg",
        },
        {
          cityA: "Bogotá",
          cityB: "Chengdu",
        },
        {
          cityA: "Bogotá",
          cityB: "Ahmedabad",
        },
        {
          cityA: "Bogotá",
          cityB: "Ibadan",
        },
        {
          cityA: "Bogotá",
          cityB: "Saigon",
        },
        {
          cityA: "Bogotá",
          cityB: "Harbin",
        },
        {
          cityA: "Bangalore",
          cityB: "Saint Petersburg",
        },
        {
          cityA: "Bangalore",
          cityB: "Chengdu",
        },
        {
          cityA: "Bangalore",
          cityB: "Ahmedabad",
        },
        {
          cityA: "Bangalore",
          cityB: "Ibadan",
        },
        {
          cityA: "Bangalore",
          cityB: "Saigon",
        },
        {
          cityA: "Bangalore",
          cityB: "Harbin",
        },
        {
          cityA: "Saint Petersburg",
          cityB: "Chengdu",
        },
        {
          cityA: "Saint Petersburg",
          cityB: "Ahmedabad",
        },
        {
          cityA: "Saint Petersburg",
          cityB: "Ibadan",
        },
        {
          cityA: "Saint Petersburg",
          cityB: "Saigon",
        },
        {
          cityA: "Saint Petersburg",
          cityB: "Harbin",
        },
        {
          cityA: "Chengdu",
          cityB: "Ahmedabad",
        },
        {
          cityA: "Chengdu",
          cityB: "Ibadan",
        },
        {
          cityA: "Chengdu",
          cityB: "Saigon",
        },
        {
          cityA: "Chengdu",
          cityB: "Harbin",
        },
        {
          cityA: "Ahmedabad",
          cityB: "Ibadan",
        },
        {
          cityA: "Ahmedabad",
          cityB: "Saigon",
        },
        {
          cityA: "Ahmedabad",
          cityB: "Harbin",
        },
        {
          cityA: "Ibadan",
          cityB: "Saigon",
        },
        {
          cityA: "Ibadan",
          cityB: "Harbin",
        },
        {
          cityA: "Saigon",
          cityB: "Harbin",
        },
      ],
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Judgment task",
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
            this.options.parameters.switch = this.random.choice([true, false])
          },
        },
        title: "Sequence",
        parameters: {},
        files: {},
        content: [
          {
            type: "lab.html.Screen",
            responses: {
              "keypress(s)": "left",
              "keypress(l)": "right",
            },
            messageHandlers: {},
            title: "Judgment",
            content:
              '\u003Cheader\u003E\r\n  \u003Ch2\u003EWhich city has more inhabitants?\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n  \u003Ctable class="w-l table-plain" style="font-size: 1.5rem"\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd style="width: 50%"\u003E\r\n        ${ parameters.switch ? parameters.cityA : parameters.cityB }\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd style="width: 50%"\u003E\r\n        ${ parameters.switch ? parameters.cityB : parameters.cityA }\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  If you think the city shown on the \u003Cstrong\u003E left \u003C\u002Fstrong\u003E has a larger population, press the \u003Ckbd\u003Es\u003C\u002Fkbd\u003E key. \u003Cbr\u003E If you think the city shown on the \u003Cstrong\u003E right \u003C\u002Fstrong\u003E has a larger population, press the \u003Ckbd\u003El\u003C\u002Fkbd\u003E key.\r\n\u003C\u002Ffooter\u003E',
            correctResponse: "${ parameters.switch ? 'left' : 'right' }",
            parameters: {},
            files: {},
          },
          {
            type: "lab.html.Screen",
            responses: {
              "": "",
            },
            messageHandlers: {},
            title: "Feedback",
            content:
              "\u003Cheader\u003E\r\n  \u003Ch2\u003EWhich city has more inhabitants?\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  ${ state.duration \u003E 3000 ? 'Can you answer more quickly?' : '&nbsp;' }\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  If you think the city shown on the \u003Cstrong\u003E left \u003C\u002Fstrong\u003E has a larger population, press the \u003Ckbd\u003Es\u003C\u002Fkbd\u003E key. \u003Cbr\u003E If you think the city shown on the \u003Cstrong\u003E right \u003C\u002Fstrong\u003E has a larger population, press the \u003Ckbd\u003El\u003C\u002Fkbd\u003E key.\r\n\u003C\u002Ffooter\u003E",
            timeout: "500",
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
        "keypress(Space)": "continue",
      },
      messageHandlers: {},
      title: "Instructions recognition",
      content:
        '\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\r\n  \u003Cdiv class="w-s text-justify"\u003E\r\n    \u003Cp\u003E\u003Cstrong\u003EThank you for your answers!\u003C\u002Fstrong\u003E We would now like to ask you a few further questions about the presented cities.\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003EPlease press the \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E to continue.\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
    {
      type: "lab.flow.Loop",
      parameters: {},
      templateParameters: [
        {
          city: "Delhi",
        },
        {
          city: "Jakarta",
        },
        {
          city: "Kinshasa",
        },
        {
          city: "Bogotá",
        },
        {
          city: "Bangalore",
        },
        {
          city: "Saint Petersburg",
        },
        {
          city: "Chengdu",
        },
        {
          city: "Ahmedabad",
        },
        {
          city: "Ibadan",
        },
        {
          city: "Saigon",
        },
        {
          city: "Harbin",
        },
      ],
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "Recognition test",
      files: {},
      sample: {
        mode: "draw-shuffle",
      },
      shuffleGroups: [],
      template: {
        type: "lab.flow.Sequence",
        parameters: {},
        responses: {
          "": "",
        },
        messageHandlers: {},
        title: "Sequence",
        files: {},
        content: [
          {
            type: "lab.html.Screen",
            parameters: {},
            responses: {
              "click #Yes": "recognized",
              "click #No": "unrecognized",
            },
            messageHandlers: {},
            title: "Recognition",
            content:
              '\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n\r\n  \u003Cdiv class="w-m text-center"\u003E\r\n    \u003Cp style="font-size: 1.25rem"\u003E\r\n      Have you \u003Cstrong\u003Eheard about\u003C\u002Fstrong\u003E this city before?\r\n    \u003C\u002Fp\u003E\r\n    \u003Cp style="font-size: 2rem; font-weight: bold"\u003E\r\n      ${ parameters.city }\r\n    \u003C\u002Fp\u003E\r\n    \u003Cdiv class="content-vertical-center content-horizontal-space-around"\u003E\r\n      \u003Cdiv class="button" id="Yes"\u003E\r\n        \u003Cstrong\u003EYes\u003C\u002Fstrong\u003E\u003Cbr\u003E\r\n        \u003Csmall\u003EI\'ve heard the name\u003C\u002Fsmall\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003Cdiv class="button" id="No"\u003E\r\n        \u003Cstrong\u003ENo\u003C\u002Fstrong\u003E\u003Cbr\u003E\r\n        \u003Csmall\u003EI\'m not familiar with this city\u003C\u002Fsmall\u003E\r\n      \u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please answer the question by clicking on the button\u003Cbr\u003E\r\n  that corresponds to your answer.\r\n\u003C\u002Ffooter\u003E',
            files: {},
          },
          {
            type: "lab.html.Screen",
            parameters: {},
            responses: {
              "click #Yes": "knowledge",
              "click #No": "mere recognition",
            },
            messageHandlers: {
              "before:prepare": function anonymous() {
                const ds = this.options.datastore

                this.options.skip = ds.state.response === "unrecognized"
              },
            },
            title: "Knowledge",
            content:
              '\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\r\n\r\n  \u003Cdiv class="w-m text-center"\u003E\r\n    \u003Cp style="font-size: 1.25rem"\u003E\r\n      Do you \u003Cstrong\u003Eknow more\u003C\u002Fstrong\u003E about this city?\r\n    \u003C\u002Fp\u003E\r\n    \u003Cp style="font-size: 2rem; font-weight: bold"\u003E\r\n      ${ parameters.city }\r\n    \u003C\u002Fp\u003E\r\n    \u003Cdiv class="content-vertical-center content-horizontal-space-around"\u003E\r\n      \u003Cdiv class="button" id="Yes"\u003E\r\n        \u003Cstrong\u003EYes\u003C\u002Fstrong\u003E\u003Cbr\u003E\r\n        \u003Csmall\u003EI know more\u003C\u002Fsmall\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003Cdiv class="button" id="No"\u003E\r\n        \u003Cstrong\u003ENo\u003C\u002Fstrong\u003E\u003Cbr\u003E\r\n        \u003Csmall\u003EI only know the name\u003C\u002Fsmall\u003E\r\n      \u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Please answer the question by clicking on the button\u003Cbr\u003E\r\n  that corresponds to your answer.\r\n\u003C\u002Ffooter\u003E',
            tardy: true,
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
      messageHandlers: {
        run: function anonymous() {
          this.end()
        },
      },
      title: "End",
      content:
        '\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\r\n\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EThank you for taking part!\u003C\u002Fh2\u003E\r\n    You can close this window now.\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\u003C\u002Ffooter\u003E',
      parameters: {},
      files: {},
    },
  ],
})

// Let's go!
study.run()
