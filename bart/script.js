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
    title: "BART",
    description:
      "Automatic version of the Balloon Analogue Risk Task, as presented in Pleskac et al. (2008).\n\nPleskac, T. J., Wallsten, T. S., Wang, P., & Lejuez, C. W. (2008). Development of an automatic response mode to improve the clinical utility of sequential risk-taking tasks. Experimental and Clinical Psychopharmacology, 16(6), 555–564. https:\u002F\u002Fdoi.org\u002F10.1037\u002Fa0014245",
    repository: "",
    contributors:
      "Felix Henninger \u003Cmailbox@felixhenninger.com\u003E (http:\u002F\u002Ffelixhenninger.com)",
  },
  parameters: {},
  files: {},
  messageHandlers: {},
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
        '\u003Cheader\u003E\n  \u003Ch1\u003EYour task\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\n  \u003Cdiv class="w-m text-justify"\u003E\n    \u003Cp\u003E\u003Cstrong\u003EThe goal of the following task is to inflate balloons. You will decide how far to inflate it &mdash; the further you inflate it, the more points you can gain.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EHowever, the balloons can also burst, in which case you will not receive any points.\u003C\u002Fstrong\u003E The more you inflate a balloon, the more likely it is that it will burst.\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EWhether balloons burst or not is a matter of luck\u003C\u002Fstrong\u003E &mdash; some burst with just the smallest amount of air, some don\'t burst even if they are inflated to the limit. Almost every balloon bursts at some point, though.\u003C\u002Fp\u003E\n    \u003Cp\u003EIn the following, \u003Cstrong\u003Eplease indicate how far you would like to inflate the balloon using a slider\u003C\u002Fstrong\u003E. A visualization indicates the size that the balloon will reach. With the click of a button, the balloon is slowly inflated to that level.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class="content-horizontal-right"\u003E\n  \u003Cbutton id="continue"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E',
    },
    {
      type: "lab.flow.Loop",
      templateParameters: [
        {
          burstPoint: 1,
        },
        {
          burstPoint: 13,
        },
        {
          burstPoint: 18,
        },
        {
          burstPoint: 22,
        },
        {
          burstPoint: 28,
        },
        {
          burstPoint: 30,
        },
        {
          burstPoint: 33,
        },
        {
          burstPoint: 37,
        },
        {
          burstPoint: 47,
        },
        {
          burstPoint: 49,
        },
        {
          burstPoint: 50,
        },
        {
          burstPoint: 55,
        },
        {
          burstPoint: 56,
        },
        {
          burstPoint: 58,
        },
        {
          burstPoint: 61,
        },
        {
          burstPoint: 67,
        },
        {
          burstPoint: 70,
        },
        {
          burstPoint: 72,
        },
        {
          burstPoint: 73,
        },
        {
          burstPoint: 78,
        },
        {
          burstPoint: 79,
        },
        {
          burstPoint: 81,
        },
        {
          burstPoint: 91,
        },
        {
          burstPoint: 95,
        },
        {
          burstPoint: 98,
        },
        {
          burstPoint: 100,
        },
        {
          burstPoint: 106,
        },
        {
          burstPoint: 110,
        },
        {
          burstPoint: 115,
        },
        {
          burstPoint: 128,
        },
      ],
      responses: {
        "": "",
      },
      messageHandlers: {},
      title: "BART",
      sample: {
        n: "5",
        mode: "draw-shuffle",
      },
      parameters: {},
      files: {},
      shuffleGroups: [],
      template: {
        type: "lab.flow.Sequence",
        responses: {
          "": "",
        },
        messageHandlers: {
          "before:prepare": function anonymous() {
            const balloonColor = "#3771c8"

            const makeKeyframes = (finalSize, burstSize, maxScale = 2.5) => {
              if (burstSize && burstSize <= finalSize) {
                return `
      @keyframes inflate {
        0%   {
          transform: translate(100px,142.45101px) scale(0.5);
        }
        ${(burstSize / 128) * 80}% {
          transform: translate(100px,142.45101px) scale(${(finalSize / 128) * maxScale});
          fill: ${balloonColor};
          opacity: 1;
        }
        ${(burstSize / 128) * 80 + 20}% {
          transform: translate(100px,142.45101px) scale(${10});
          fill: red;
          opacity: 0;
        }
        100% {
          transform: translate(100px,142.45101px) scale(${10});
          fill: red;
          opacity: 0;
        }
      }`
              } else {
                return `
      @keyframes inflate {
        0%   {
          transform: translate(100px,142.45101px) scale(0.5);
        }
        ${(finalSize / 128) * 80}% {
          transform: translate(100px,142.45101px) scale(${(finalSize / 128) * maxScale});
        }
        100% {
          transform: translate(100px,142.45101px) scale(${(finalSize / 128) * maxScale});
        }
      }`
              }
            }

            window.makeBalloon = (
              finalSize,
              burstSize = undefined,
              dashedSize = undefined,
              maxScale = 2.5
            ) =>
              `
  <style type="text/css">
    ${makeKeyframes(finalSize, burstSize, maxScale)}
    #balloon_filled {
      transform: translate(100px,142.45101px);
      animation: 1.5s linear 0s inflate;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      fill: ${balloonColor};
      stroke: white;
      stroke-width:2;
      stroke-linecap:butt;
      stroke-linejoin:round;
      vector-effect:non-scaling-stroke;
    }
    #balloon_dashed {
      transform: translate(100px,142.45101px) scale(${(dashedSize / 128) * maxScale});
      fill: none;
      stroke: ${dashedSize ? "#666" : "none"};
      stroke-dasharray: 5 5;
      stroke-width:2;
      stroke-linecap:butt;
      stroke-linejoin:round;
      vector-effect:non-scaling-stroke;
    }
  </style>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
    viewBox="0 0 200 200"
    style="width:400px">
    <g transform="translate(0,-852.36216)">
      <!-- cord -->
      <path
        d="
          m 100.15232,1000.4094
          c 0,2.6033 -3.088308,4.9961 -3.088308,8.0709
            0,3.0748 5.431788,6.1695 5.431788,9.1113
            0,2.9417 -3.321701,8.3723 -3.321701,8.3723
          "
        style="
          fill:none;
          stroke:#000000;
          stroke-width:1px;
          stroke-linecap:butt;
          stroke-linejoin:miter;
          "
        />
      <!-- bottom piece -->
      <path
        id="path4204"
        d="
          m 98.110605,994.50013
          c 0,0 1.516755,0.38598 3.523825,0
            0,0 2.65014,2.62561 1.44609,5.41706
            -2.47024,0.38601 -3.55273,0.37121 -5.791385,0.0238
            -1.042723,-3.12069 0.82147,-5.44086 0.82147,-5.44086
            z"
        style="
          fill: ${balloonColor};
          stroke:#ffffff;
          stroke-width:1;
          stroke-linecap:butt;
          stroke-linejoin:round
          "
        />
    </g>
    <path
      id="balloon_filled"
      d="
        m 21.84711,-28
        c 0,14.3594 -14.60335,27.81454 -21.84711,28
        c -7.243756,0.18546 -21.847107,-13.6406 -21.847107,-28
        c 0,-14.3594 9.781283,-24 21.847107,-24
        c 12.06583,0 21.84711,9.6406 21.84711,24
        z"
    />
    <path
      id="balloon_dashed"
      d="
        m 21.84711,-28
        c 0,14.3594 -14.60335,27.81454 -21.84711,28
        c -7.243756,0.18546 -21.847107,-13.6406 -21.847107,-28
        c 0,-14.3594 9.781283,-24 21.847107,-24
        c 12.06583,0 21.84711,9.6406 21.84711,24
        z"
    />
  </svg>
  `
          },
        },
        title: "Trial",
        parameters: {},
        files: {},
        content: [
          {
            type: "lab.html.Form",
            responses: {
              "": "",
            },
            messageHandlers: {
              "before:prepare": function anonymous() {
                this.options.events["input input"] = function () {
                  const pumps = document.getElementById("pumps").value
                  document
                    .getElementById("balloon_filled")
                    .setAttribute(
                      "transform",
                      `translate(100,142.45101) scale(${0.5 + pumps / 64})`
                    )
                }
              },
            },
            title: "Judgment",
            content:
              '\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\n  \u003Cdiv\u003E\n    \u003Csvg xmlns="http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg" version="1.1"\n      viewBox="0 0 200 200"\n      style="width: 400px; display: block"\u003E\n      \u003Cg transform="translate(0, -852.36216)"\u003E\n        \u003C!-- cord --\u003E\n        \u003Cpath\n          d="\n            m 100.15232,1000.4094\n            c 0,2.6033 -3.088308,4.9961 -3.088308,8.0709\n              0,3.0748 5.431788,6.1695 5.431788,9.1113\n              0,2.9417 -3.321701,8.3723 -3.321701,8.3723\n            "\n          style="\n            fill:none;\n            stroke:#000000;\n            stroke-width:1px;\n            stroke-linecap:butt;\n            stroke-linejoin:miter;\n            "\n          \u002F\u003E\n        \u003C!-- bottom piece --\u003E\n        \u003Cpath\n          id="path4204"\n          d="\n            m 98.110605,994.50013\n            c 0,0 1.516755,0.38598 3.523825,0\n              0,0 2.65014,2.62561 1.44609,5.41706\n              -2.47024,0.38601 -3.55273,0.37121 -5.791385,0.0238\n              -1.042723,-3.12069 0.82147,-5.44086 0.82147,-5.44086\n              z"\n          style="\n            fill:#3771c8;\n            stroke:#ffffff;\n            stroke-width:1;\n            stroke-linecap:butt;\n            stroke-linejoin:round\n            "\n          \u002F\u003E\n      \u003C\u002Fg\u003E\n      \u003Cg transform="translate(100,142.45101)" id="balloon_filled"\u003E\n        \u003Cpath\n          id="path4201"\n          d="\n            m 21.84711,-28\n            c 0,14.3594 -14.60335,27.81454 -21.84711,28\n            c -7.243756,0.18546 -21.847107,-13.6406 -21.847107,-28\n            c 0,-14.3594 9.781283,-24 21.847107,-24\n            c 12.06583,0 21.84711,9.6406 21.84711,24\n            z"\n          style="\n            fill:none;\n            stroke:#3771c8;\n            stroke-dasharray: 5 5;\n            stroke-width:2;\n            stroke-linecap:butt;\n            stroke-linejoin:round;\n            vector-effect:non-scaling-stroke;\n            "\n        \u002F\u003E\n      \u003C\u002Fg\u003E\n    \u003C\u002Fsvg\u003E\n    \u003Cdiv class="m-l" style="height: 200px"\u003E\n      \u003Cp class="font-weight-bold"\u003E\n        How far would you like to inflate the balloon?\n      \u003C\u002Fp\u003E\n      \u003Cform id="pumps-form"\u003E\n        \u003Cinput \n          type="range" \n          name="pumps" id="pumps"\n          class="w-100"\n          min="1" max="128" step="1"\n        \u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class="content-horizontal-right content-vertical-center"\u003E\n  \u003Cbutton type="submit" form="pumps-form"\u003E\n    Inflate! &rarr;\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E',
            parameters: {},
            files: {},
          },
          {
            type: "lab.html.Screen",
            responses: {
              "click button": "continue",
            },
            messageHandlers: {},
            title: "Result",
            content:
              '\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\n  \u003Cdiv\u003E\n    ${ window.makeBalloon(this.state.pumps, this.parameters.burstPoint, this.state.pumps) }\n    \u003Cdiv class="m-l" style="height: 200px"\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class="content-horizontal-right"\u003E\n\u003C\u002Ffooter\u003E',
            tardy: true,
            timeout: "2000",
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
                const ds = this.options.datastore

                // Extract previous behavior
                const pumps = ds.extract("pumps", "Judgment").map((x) => parseInt(x))
                const burstPoints = ds.extract("burstPoint", "Judgment")

                // Compute per-trial gains
                const wins = pumps.map((p, i) => (p < burstPoints[i] ? p : 0))

                // Write results to state
                this.state.burst = wins[wins.length - 1] === 0
                this.state.currentPoints = wins[wins.length - 1]
                this.state.totalPoints = wins.reduce((prev, cur) => prev + cur, 0)
              },
            },
            title: "Feedback",
            tardy: true,
            timeout: "3500",
            content:
              '\u003Cmain class="content-horizontal-center content-vertical-center"\u003E\n  \u003Cdiv\u003E\n    \u003Cspan class="text-muted font-weight-bold"\u003E\n      Your balloon ${ this.state.burst ? \'burst\' : \'held\' }, so you received\n    \u003C\u002Fspan\u003E\n    \u003Cdiv style="font-size: 5em; line-height: 1.2em; font-weight: bold"\u003E\n      ${ this.state.currentPoints } Points\n    \u003C\u002Fdiv\u003E\n    \u003Cspan class="text-muted"\u003E\n      In total, you have collected \u003Cstrong\u003E${ this.state.totalPoints }\u003C\u002Fstrong\u003E points so far.\n    \u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n\u003C\u002Ffooter\u003E',
            parameters: {},
            files: {},
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
        '\u003Cheader\u003E\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain class="content-vertical-center content-horizontal-center"\u003E\n  \u003Cdiv class="m-w text-center"\u003E\n    \u003Cp\u003E\u003Cstrong\u003EThe experiment is now complete.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003EThank you for taking the time!\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cp\u003EYou can now close this window.\u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E ',
    },
  ],
})

// Let's go!
study.run()
