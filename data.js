const CATEGORIES = [
  {
    "name": "Emotions & Personality",
    "icon": "😊",
    "words": [
      {
        "en": "to be fed up",
        "es": "estar harto/a",
        "gender": null,
        "exEn": "I'm fed up with this traffic.",
        "exEs": "Estoy harto de este tráfico.",
        "conj": {
          "verb": "estar",
          "tenses": {
            "Presente": [
              "estoy",
              "estás",
              "está",
              "estamos",
              "estáis",
              "están"
            ],
            "Pretérito": [
              "estuve",
              "estuviste",
              "estuvo",
              "estuvimos",
              "estuvisteis",
              "estuvieron"
            ],
            "Imperfecto": [
              "estaba",
              "estabas",
              "estaba",
              "estábamos",
              "estabais",
              "estaban"
            ],
            "Futuro": [
              "estaré",
              "estarás",
              "estará",
              "estaremos",
              "estaréis",
              "estarán"
            ],
            "Condicional": [
              "estaría",
              "estarías",
              "estaría",
              "estaríamos",
              "estaríais",
              "estarían"
            ],
            "Subjuntivo": [
              "esté",
              "estés",
              "esté",
              "estemos",
              "estéis",
              "estén"
            ]
          }
        }
      },
      {
        "en": "proud",
        "es": "orgulloso/a",
        "gender": null,
        "exEn": "She's very proud of her son.",
        "exEs": "Está muy orgullosa de su hijo."
      },
      {
        "en": "stingy",
        "es": "tacaño/a",
        "gender": null,
        "exEn": "Don't be so stingy, invite them.",
        "exEs": "No seas tan tacaño, invítalos."
      },
      {
        "en": "to be embarrassed",
        "es": "tener vergüenza",
        "gender": null,
        "exEn": "I'm embarrassed to sing in public.",
        "exEs": "Tengo vergüenza de cantar en público.",
        "conj": {
          "verb": "tener",
          "tenses": {
            "Presente": [
              "tengo",
              "tienes",
              "tiene",
              "tenemos",
              "tenéis",
              "tienen"
            ],
            "Pretérito": [
              "tuve",
              "tuviste",
              "tuvo",
              "tuvimos",
              "tuvisteis",
              "tuvieron"
            ],
            "Imperfecto": [
              "tenía",
              "tenías",
              "tenía",
              "teníamos",
              "teníais",
              "tenían"
            ],
            "Futuro": [
              "tendré",
              "tendrás",
              "tendrá",
              "tendremos",
              "tendréis",
              "tendrán"
            ],
            "Condicional": [
              "tendría",
              "tendrías",
              "tendría",
              "tendríamos",
              "tendríais",
              "tendrían"
            ],
            "Subjuntivo": [
              "tenga",
              "tengas",
              "tenga",
              "tengamos",
              "tengáis",
              "tengan"
            ]
          }
        }
      },
      {
        "en": "stubborn",
        "es": "terco/a",
        "gender": null,
        "exEn": "He's too stubborn to change his mind.",
        "exEs": "Es demasiado terco para cambiar de opinión."
      },
      {
        "en": "mood",
        "es": "el humor",
        "gender": "m.",
        "exEn": "He's in a bad mood today.",
        "exEs": "Está de mal humor hoy."
      },
      {
        "en": "to get angry",
        "es": "enfadarse",
        "gender": null,
        "exEn": "Don't get angry over small things.",
        "exEs": "No te enfades por cosas pequeñas.",
        "conj": {
          "verb": "enfadarse",
          "tenses": {
            "Presente": [
              "me enfado",
              "te enfadas",
              "se enfada",
              "nos enfadamos",
              "os enfadáis",
              "se enfadan"
            ],
            "Pretérito": [
              "me enfadé",
              "te enfadaste",
              "se enfadó",
              "nos enfadamos",
              "os enfadsteis",
              "se enfadaron"
            ],
            "Imperfecto": [
              "me enfadaba",
              "te enfadabas",
              "se enfadaba",
              "nos enfadábamos",
              "os enfadabais",
              "se enfadaban"
            ],
            "Futuro": [
              "me enfadaré",
              "te enfadarás",
              "se enfadará",
              "nos enfadaremos",
              "os enfadaréis",
              "se enfadarán"
            ],
            "Condicional": [
              "me enfadaría",
              "te enfadarías",
              "se enfadaría",
              "nos enfadaríamos",
              "os enfadaríais",
              "se enfadarían"
            ],
            "Subjuntivo": [
              "me enfade",
              "te enfades",
              "se enfade",
              "nos enfademos",
              "os enfadéis",
              "se enfaden"
            ]
          }
        }
      },
      {
        "en": "jealous",
        "es": "celoso/a",
        "gender": null,
        "exEn": "She gets jealous easily.",
        "exEs": "Se pone celosa fácilmente."
      },
      {
        "en": "trustworthy",
        "es": "fiable",
        "gender": null,
        "exEn": "She's a very trustworthy person.",
        "exEs": "Es una persona muy fiable."
      },
      {
        "en": "to miss (someone)",
        "es": "echar de menos",
        "gender": null,
        "exEn": "I miss my family a lot.",
        "exEs": "Echo mucho de menos a mi familia.",
        "conj": {
          "verb": "echar",
          "tenses": {
            "Presente": [
              "echo",
              "echas",
              "echa",
              "echamos",
              "echáis",
              "echan"
            ],
            "Pretérito": [
              "eché",
              "echaste",
              "echó",
              "echamos",
              "echsteis",
              "echaron"
            ],
            "Imperfecto": [
              "echaba",
              "echabas",
              "echaba",
              "echábamos",
              "echabais",
              "echaban"
            ],
            "Futuro": [
              "echaré",
              "echarás",
              "echará",
              "echaremos",
              "echaréis",
              "echarán"
            ],
            "Condicional": [
              "echaría",
              "echarías",
              "echaría",
              "echaríamos",
              "echaríais",
              "echarían"
            ],
            "Subjuntivo": [
              "eche",
              "eches",
              "eche",
              "echemos",
              "echéis",
              "echen"
            ]
          }
        }
      },
      {
        "en": "sensitive",
        "es": "sensible",
        "gender": null,
        "exEn": "He's very sensitive about that topic.",
        "exEs": "Es muy sensible con ese tema."
      },
      {
        "en": "loneliness",
        "es": "la soledad",
        "gender": "f.",
        "exEn": "Loneliness can be hard to bear.",
        "exEs": "La soledad puede ser difícil de soportar."
      }
    ]
  },
  {
    "name": "Work & Career",
    "icon": "💼",
    "words": [
      {
        "en": "to apply (for a job)",
        "es": "solicitar",
        "gender": null,
        "exEn": "I want to apply for that position.",
        "exEs": "Quiero solicitar ese puesto.",
        "conj": {
          "verb": "solicitar",
          "tenses": {
            "Presente": [
              "solicito",
              "solicitas",
              "solicita",
              "solicitamos",
              "solicitáis",
              "solicitan"
            ],
            "Pretérito": [
              "solicité",
              "solicitaste",
              "solicitó",
              "solicitamos",
              "solicitsteis",
              "solicitaron"
            ],
            "Imperfecto": [
              "solicitaba",
              "solicitabas",
              "solicitaba",
              "solicitábamos",
              "solicitabais",
              "solicitaban"
            ],
            "Futuro": [
              "solicitaré",
              "solicitarás",
              "solicitará",
              "solicitaremos",
              "solicitaréis",
              "solicitarán"
            ],
            "Condicional": [
              "solicitaría",
              "solicitarías",
              "solicitaría",
              "solicitaríamos",
              "solicitaríais",
              "solicitarían"
            ],
            "Subjuntivo": [
              "solicite",
              "solicites",
              "solicite",
              "solicitemos",
              "solicitéis",
              "soliciten"
            ]
          }
        }
      },
      {
        "en": "to fire / to lay off",
        "es": "despedir",
        "gender": null,
        "exEn": "They fired twenty employees.",
        "exEs": "Despidieron a veinte empleados.",
        "conj": {
          "verb": "despedir",
          "tenses": {
            "Presente": [
              "despido",
              "despides",
              "despide",
              "despedimos",
              "despedís",
              "despiden"
            ],
            "Pretérito": [
              "despedí",
              "despediste",
              "despidió",
              "despedimos",
              "despedisteis",
              "despidieron"
            ],
            "Imperfecto": [
              "despedía",
              "despedías",
              "despedía",
              "despedíamos",
              "despedíais",
              "despedían"
            ],
            "Futuro": [
              "despediré",
              "despedirás",
              "despedirá",
              "despediremos",
              "despediréis",
              "despedirán"
            ],
            "Condicional": [
              "despediría",
              "despedirías",
              "despediría",
              "despediríamos",
              "despediríais",
              "despedirían"
            ],
            "Subjuntivo": [
              "despida",
              "despidas",
              "despida",
              "despidamos",
              "despidáis",
              "despidan"
            ]
          }
        }
      },
      {
        "en": "salary",
        "es": "el sueldo",
        "gender": "m.",
        "exEn": "The salary isn't very high.",
        "exEs": "El sueldo no es muy alto."
      },
      {
        "en": "company",
        "es": "la empresa",
        "gender": "f.",
        "exEn": "The company has offices in Madrid.",
        "exEs": "La empresa tiene oficinas en Madrid."
      },
      {
        "en": "to retire",
        "es": "jubilarse",
        "gender": null,
        "exEn": "My father retired last year.",
        "exEs": "Mi padre se jubiló el año pasado.",
        "conj": {
          "verb": "jubilarse",
          "tenses": {
            "Presente": [
              "me jubilo",
              "te jubilas",
              "se jubila",
              "nos jubilamos",
              "os jubiláis",
              "se jubilan"
            ],
            "Pretérito": [
              "me jubilé",
              "te jubilaste",
              "se jubiló",
              "nos jubilamos",
              "os jubilsteis",
              "se jubilaron"
            ],
            "Imperfecto": [
              "me jubilaba",
              "te jubilabas",
              "se jubilaba",
              "nos jubilábamos",
              "os jubilabais",
              "se jubilaban"
            ],
            "Futuro": [
              "me jubilaré",
              "te jubilarás",
              "se jubilará",
              "nos jubilaremos",
              "os jubilaréis",
              "se jubilarán"
            ],
            "Condicional": [
              "me jubilaría",
              "te jubilarías",
              "se jubilaría",
              "nos jubilaríamos",
              "os jubilaríais",
              "se jubilarían"
            ],
            "Subjuntivo": [
              "me jubile",
              "te jubiles",
              "se jubile",
              "nos jubilemos",
              "os jubiléis",
              "se jubilen"
            ]
          }
        }
      },
      {
        "en": "unemployment",
        "es": "el desempleo",
        "gender": "m.",
        "exEn": "Unemployment has risen this year.",
        "exEs": "El desempleo ha subido este año."
      },
      {
        "en": "meeting",
        "es": "la reunión",
        "gender": "f.",
        "exEn": "The meeting starts at ten.",
        "exEs": "La reunión empieza a las diez."
      },
      {
        "en": "to be in charge of",
        "es": "encargarse de",
        "gender": null,
        "exEn": "Who's in charge of this project?",
        "exEs": "¿Quién se encarga de este proyecto?",
        "conj": {
          "verb": "encargarse",
          "tenses": {
            "Presente": [
              "me encargo",
              "te encargas",
              "se encarga",
              "nos encargamos",
              "os encargáis",
              "se encargan"
            ],
            "Pretérito": [
              "me encarué",
              "te encargaste",
              "se encargó",
              "nos encargamos",
              "os encargsteis",
              "se encargaron"
            ],
            "Imperfecto": [
              "me encargaba",
              "te encargabas",
              "se encargaba",
              "nos encargábamos",
              "os encargabais",
              "se encargaban"
            ],
            "Futuro": [
              "me encargaré",
              "te encargarás",
              "se encargará",
              "nos encargaremos",
              "os encargaréis",
              "se encargarán"
            ],
            "Condicional": [
              "me encargaría",
              "te encargarías",
              "se encargaría",
              "nos encargaríamos",
              "os encargaríais",
              "se encargarían"
            ],
            "Subjuntivo": [
              "me encarue",
              "te encarues",
              "se encarue",
              "nos encaruemos",
              "os encaruéis",
              "se encaruen"
            ]
          }
        }
      },
      {
        "en": "résumé / CV",
        "es": "el currículum",
        "gender": "m.",
        "exEn": "Send your CV by email.",
        "exEs": "Envía tu currículum por correo electrónico."
      },
      {
        "en": "deadline",
        "es": "el plazo",
        "gender": "m.",
        "exEn": "The deadline is next Friday.",
        "exEs": "El plazo es el próximo viernes."
      },
      {
        "en": "strike",
        "es": "la huelga",
        "gender": "f.",
        "exEn": "The workers went on strike.",
        "exEs": "Los trabajadores fueron a la huelga."
      },
      {
        "en": "to earn / to win",
        "es": "ganar",
        "gender": null,
        "exEn": "She earns a good salary.",
        "exEs": "Ella gana un buen sueldo.",
        "conj": {
          "verb": "ganar",
          "tenses": {
            "Presente": [
              "gano",
              "ganas",
              "gana",
              "ganamos",
              "ganáis",
              "ganan"
            ],
            "Pretérito": [
              "gané",
              "ganaste",
              "ganó",
              "ganamos",
              "gansteis",
              "ganaron"
            ],
            "Imperfecto": [
              "ganaba",
              "ganabas",
              "ganaba",
              "ganábamos",
              "ganabais",
              "ganaban"
            ],
            "Futuro": [
              "ganaré",
              "ganarás",
              "ganará",
              "ganaremos",
              "ganaréis",
              "ganarán"
            ],
            "Condicional": [
              "ganaría",
              "ganarías",
              "ganaría",
              "ganaríamos",
              "ganaríais",
              "ganarían"
            ],
            "Subjuntivo": [
              "gane",
              "ganes",
              "gane",
              "ganemos",
              "ganéis",
              "ganen"
            ]
          }
        }
      }
    ]
  },
  {
    "name": "Health & Body",
    "icon": "🏥",
    "words": [
      {
        "en": "prescription",
        "es": "la receta",
        "gender": "f.",
        "exEn": "The doctor wrote me a prescription.",
        "exEs": "El médico me escribió una receta."
      },
      {
        "en": "symptom",
        "es": "el síntoma",
        "gender": "m.",
        "exEn": "What are your symptoms?",
        "exEs": "¿Cuáles son tus síntomas?"
      },
      {
        "en": "to faint",
        "es": "desmayarse",
        "gender": null,
        "exEn": "She fainted from the heat.",
        "exEs": "Se desmayó por el calor.",
        "conj": {
          "verb": "desmayarse",
          "tenses": {
            "Presente": [
              "me desmayo",
              "te desmayas",
              "se desmaya",
              "nos desmayamos",
              "os desmayáis",
              "se desmayan"
            ],
            "Pretérito": [
              "me desmayé",
              "te desmayaste",
              "se desmayó",
              "nos desmayamos",
              "os desmaysteis",
              "se desmayaron"
            ],
            "Imperfecto": [
              "me desmayaba",
              "te desmayabas",
              "se desmayaba",
              "nos desmayábamos",
              "os desmayabais",
              "se desmayaban"
            ],
            "Futuro": [
              "me desmayaré",
              "te desmayarás",
              "se desmayará",
              "nos desmayaremos",
              "os desmayaréis",
              "se desmayarán"
            ],
            "Condicional": [
              "me desmayaría",
              "te desmayarías",
              "se desmayaría",
              "nos desmayaríamos",
              "os desmayaríais",
              "se desmayarían"
            ],
            "Subjuntivo": [
              "me desmaye",
              "te desmayes",
              "se desmaye",
              "nos desmayemos",
              "os desmayéis",
              "se desmayen"
            ]
          }
        }
      },
      {
        "en": "wound / injury",
        "es": "la herida",
        "gender": "f.",
        "exEn": "The wound isn't serious.",
        "exEs": "La herida no es grave."
      },
      {
        "en": "to heal / to cure",
        "es": "curar",
        "gender": null,
        "exEn": "This medicine will cure the infection.",
        "exEs": "Esta medicina curará la infección.",
        "conj": {
          "verb": "curar",
          "tenses": {
            "Presente": [
              "curo",
              "curas",
              "cura",
              "curamos",
              "curáis",
              "curan"
            ],
            "Pretérito": [
              "curé",
              "curaste",
              "curó",
              "curamos",
              "cursteis",
              "curaron"
            ],
            "Imperfecto": [
              "curaba",
              "curabas",
              "curaba",
              "curábamos",
              "curabais",
              "curaban"
            ],
            "Futuro": [
              "curaré",
              "curarás",
              "curará",
              "curaremos",
              "curaréis",
              "curarán"
            ],
            "Condicional": [
              "curaría",
              "curarías",
              "curaría",
              "curaríamos",
              "curaríais",
              "curarían"
            ],
            "Subjuntivo": [
              "cure",
              "cures",
              "cure",
              "curemos",
              "curéis",
              "curen"
            ]
          }
        }
      },
      {
        "en": "flu",
        "es": "la gripe",
        "gender": "f.",
        "exEn": "I caught the flu last week.",
        "exEs": "Cogí la gripe la semana pasada."
      },
      {
        "en": "to bleed",
        "es": "sangrar",
        "gender": null,
        "exEn": "Your nose is bleeding.",
        "exEs": "Te está sangrando la nariz.",
        "conj": {
          "verb": "sangrar",
          "tenses": {
            "Presente": [
              "sangro",
              "sangras",
              "sangra",
              "sangramos",
              "sangráis",
              "sangran"
            ],
            "Pretérito": [
              "sangré",
              "sangraste",
              "sangró",
              "sangramos",
              "sangrsteis",
              "sangraron"
            ],
            "Imperfecto": [
              "sangraba",
              "sangrabas",
              "sangraba",
              "sangrábamos",
              "sangrabais",
              "sangraban"
            ],
            "Futuro": [
              "sangraré",
              "sangrarás",
              "sangrará",
              "sangraremos",
              "sangraréis",
              "sangrarán"
            ],
            "Condicional": [
              "sangraría",
              "sangrarías",
              "sangraría",
              "sangraríamos",
              "sangraríais",
              "sangrarían"
            ],
            "Subjuntivo": [
              "sangre",
              "sangres",
              "sangre",
              "sangremos",
              "sangréis",
              "sangren"
            ]
          }
        }
      },
      {
        "en": "pill / tablet",
        "es": "la pastilla",
        "gender": "f.",
        "exEn": "Take one pill every eight hours.",
        "exEs": "Toma una pastilla cada ocho horas."
      },
      {
        "en": "appointment",
        "es": "la cita",
        "gender": "f.",
        "exEn": "I have a doctor's appointment at four.",
        "exEs": "Tengo cita con el médico a las cuatro."
      },
      {
        "en": "to sneeze",
        "es": "estornudar",
        "gender": null,
        "exEn": "I can't stop sneezing.",
        "exEs": "No puedo dejar de estornudar.",
        "conj": {
          "verb": "estornudar",
          "tenses": {
            "Presente": [
              "estornudo",
              "estornudas",
              "estornuda",
              "estornudamos",
              "estornudáis",
              "estornudan"
            ],
            "Pretérito": [
              "estornudé",
              "estornudaste",
              "estornudó",
              "estornudamos",
              "estornudsteis",
              "estornudaron"
            ],
            "Imperfecto": [
              "estornudaba",
              "estornudabas",
              "estornudaba",
              "estornudábamos",
              "estornudabais",
              "estornudaban"
            ],
            "Futuro": [
              "estornudaré",
              "estornudarás",
              "estornudará",
              "estornudaremos",
              "estornudaréis",
              "estornudarán"
            ],
            "Condicional": [
              "estornudaría",
              "estornudarías",
              "estornudaría",
              "estornudaríamos",
              "estornudaríais",
              "estornudarían"
            ],
            "Subjuntivo": [
              "estornude",
              "estornudes",
              "estornude",
              "estornudemos",
              "estornudéis",
              "estornuden"
            ]
          }
        }
      },
      {
        "en": "pain",
        "es": "el dolor",
        "gender": "m.",
        "exEn": "I have a sharp pain in my back.",
        "exEs": "Tengo un dolor fuerte en la espalda."
      },
      {
        "en": "to swell",
        "es": "hincharse",
        "gender": null,
        "exEn": "My ankle swelled up after the fall.",
        "exEs": "Se me hinchó el tobillo después de la caída.",
        "conj": {
          "verb": "hincharse",
          "tenses": {
            "Presente": [
              "me hincho",
              "te hinchas",
              "se hincha",
              "nos hinchamos",
              "os hincháis",
              "se hinchan"
            ],
            "Pretérito": [
              "me hinché",
              "te hinchaste",
              "se hinchó",
              "nos hinchamos",
              "os hinchsteis",
              "se hincharon"
            ],
            "Imperfecto": [
              "me hinchaba",
              "te hinchabas",
              "se hinchaba",
              "nos hinchábamos",
              "os hinchabais",
              "se hinchaban"
            ],
            "Futuro": [
              "me hincharé",
              "te hincharás",
              "se hinchará",
              "nos hincharemos",
              "os hincharéis",
              "se hincharán"
            ],
            "Condicional": [
              "me hincharía",
              "te hincharías",
              "se hincharía",
              "nos hincharíamos",
              "os hincharíais",
              "se hincharían"
            ],
            "Subjuntivo": [
              "me hinche",
              "te hinches",
              "se hinche",
              "nos hinchemos",
              "os hinchéis",
              "se hinchen"
            ]
          }
        }
      }
    ]
  },
  {
    "name": "Home & Daily Life",
    "icon": "🏠",
    "words": [
      {
        "en": "move (house)",
        "es": "la mudanza",
        "gender": "f.",
        "exEn": "The move took all day.",
        "exEs": "La mudanza duró todo el día."
      },
      {
        "en": "rent",
        "es": "el alquiler",
        "gender": "m.",
        "exEn": "The rent goes up every year.",
        "exEs": "El alquiler sube cada año."
      },
      {
        "en": "bill / invoice",
        "es": "la factura",
        "gender": "f.",
        "exEn": "I need to pay the electricity bill.",
        "exEs": "Necesito pagar la factura de la luz."
      },
      {
        "en": "to plug in",
        "es": "enchufar",
        "gender": null,
        "exEn": "Plug in the charger here.",
        "exEs": "Enchufa el cargador aquí.",
        "conj": {
          "verb": "enchufar",
          "tenses": {
            "Presente": [
              "enchufo",
              "enchufas",
              "enchufa",
              "enchufamos",
              "enchufáis",
              "enchufan"
            ],
            "Pretérito": [
              "enchufé",
              "enchufaste",
              "enchufó",
              "enchufamos",
              "enchufsteis",
              "enchufaron"
            ],
            "Imperfecto": [
              "enchufaba",
              "enchufabas",
              "enchufaba",
              "enchufábamos",
              "enchufabais",
              "enchufaban"
            ],
            "Futuro": [
              "enchufaré",
              "enchufarás",
              "enchufará",
              "enchufaremos",
              "enchufaréis",
              "enchufarán"
            ],
            "Condicional": [
              "enchufaría",
              "enchufarías",
              "enchufaría",
              "enchufaríamos",
              "enchufaríais",
              "enchufarían"
            ],
            "Subjuntivo": [
              "enchufe",
              "enchufes",
              "enchufe",
              "enchufemos",
              "enchuféis",
              "enchufen"
            ]
          }
        }
      },
      {
        "en": "neighbor",
        "es": "el/la vecino/a",
        "gender": "m./f.",
        "exEn": "My neighbor is very noisy.",
        "exEs": "Mi vecino es muy ruidoso."
      },
      {
        "en": "to sweep",
        "es": "barrer",
        "gender": null,
        "exEn": "Can you sweep the kitchen floor?",
        "exEs": "¿Puedes barrer el suelo de la cocina?",
        "conj": {
          "verb": "barrer",
          "tenses": {
            "Presente": [
              "barro",
              "barres",
              "barre",
              "barremos",
              "barréis",
              "barren"
            ],
            "Pretérito": [
              "barrí",
              "barriste",
              "barrió",
              "barrimos",
              "barristeis",
              "barrieron"
            ],
            "Imperfecto": [
              "barría",
              "barrías",
              "barría",
              "barríamos",
              "barríais",
              "barrían"
            ],
            "Futuro": [
              "barreré",
              "barrerás",
              "barrerá",
              "barreremos",
              "barreréis",
              "barrerán"
            ],
            "Condicional": [
              "barrería",
              "barrerías",
              "barrería",
              "barreríamos",
              "barreríais",
              "barrerían"
            ],
            "Subjuntivo": [
              "barra",
              "barras",
              "barra",
              "barramos",
              "barráis",
              "barran"
            ]
          }
        }
      },
      {
        "en": "drawer",
        "es": "el cajón",
        "gender": "m.",
        "exEn": "The keys are in the top drawer.",
        "exEs": "Las llaves están en el cajón de arriba."
      },
      {
        "en": "stain",
        "es": "la mancha",
        "gender": "f.",
        "exEn": "There's a stain on your shirt.",
        "exEs": "Hay una mancha en tu camisa."
      },
      {
        "en": "lock",
        "es": "la cerradura",
        "gender": "f.",
        "exEn": "The lock is broken.",
        "exEs": "La cerradura está rota."
      },
      {
        "en": "to iron",
        "es": "planchar",
        "gender": null,
        "exEn": "I need to iron this shirt.",
        "exEs": "Necesito planchar esta camisa.",
        "conj": {
          "verb": "planchar",
          "tenses": {
            "Presente": [
              "plancho",
              "planchas",
              "plancha",
              "planchamos",
              "plancháis",
              "planchan"
            ],
            "Pretérito": [
              "planché",
              "planchaste",
              "planchó",
              "planchamos",
              "planchsteis",
              "plancharon"
            ],
            "Imperfecto": [
              "planchaba",
              "planchabas",
              "planchaba",
              "planchábamos",
              "planchabais",
              "planchaban"
            ],
            "Futuro": [
              "plancharé",
              "plancharás",
              "planchará",
              "plancharemos",
              "plancharéis",
              "plancharán"
            ],
            "Condicional": [
              "plancharía",
              "plancharías",
              "plancharía",
              "plancharíamos",
              "plancharíais",
              "plancharían"
            ],
            "Subjuntivo": [
              "planche",
              "planches",
              "planche",
              "planchemos",
              "planchéis",
              "planchen"
            ]
          }
        }
      },
      {
        "en": "mortgage",
        "es": "la hipoteca",
        "gender": "f.",
        "exEn": "We're paying off the mortgage.",
        "exEs": "Estamos pagando la hipoteca."
      },
      {
        "en": "to leak",
        "es": "gotear",
        "gender": null,
        "exEn": "The faucet is leaking.",
        "exEs": "El grifo está goteando.",
        "conj": {
          "verb": "gotear",
          "tenses": {
            "Presente": [
              "goteo",
              "goteas",
              "gotea",
              "goteamos",
              "goteáis",
              "gotean"
            ],
            "Pretérito": [
              "goteé",
              "goteaste",
              "goteó",
              "goteamos",
              "gotesteis",
              "gotearon"
            ],
            "Imperfecto": [
              "goteaba",
              "goteabas",
              "goteaba",
              "goteábamos",
              "goteabais",
              "goteaban"
            ],
            "Futuro": [
              "gotearé",
              "gotearás",
              "goteará",
              "gotearemos",
              "gotearéis",
              "gotearán"
            ],
            "Condicional": [
              "gotearía",
              "gotearías",
              "gotearía",
              "gotearíamos",
              "gotearíais",
              "gotearían"
            ],
            "Subjuntivo": [
              "gotee",
              "gotees",
              "gotee",
              "goteemos",
              "goteéis",
              "goteen"
            ]
          }
        }
      }
    ]
  },
  {
    "name": "Travel & Culture",
    "icon": "✈️",
    "words": [
      {
        "en": "luggage",
        "es": "el equipaje",
        "gender": "m.",
        "exEn": "My luggage got lost at the airport.",
        "exEs": "Se me perdió el equipaje en el aeropuerto."
      },
      {
        "en": "customs",
        "es": "la aduana",
        "gender": "f.",
        "exEn": "We went through customs quickly.",
        "exEs": "Pasamos por la aduana rápidamente."
      },
      {
        "en": "round-trip ticket",
        "es": "el billete de ida y vuelta",
        "gender": "m.",
        "exEn": "A round-trip ticket to Barcelona, please.",
        "exEs": "Un billete de ida y vuelta a Barcelona, por favor."
      },
      {
        "en": "to miss (a flight)",
        "es": "perder (un vuelo)",
        "gender": null,
        "exEn": "We almost missed the flight.",
        "exEs": "Casi perdemos el vuelo.",
        "conj": {
          "verb": "perder",
          "tenses": {
            "Presente": [
              "pierdo",
              "pierdes",
              "pierde",
              "perdemos",
              "perdéis",
              "pierden"
            ],
            "Pretérito": [
              "perdí",
              "perdiste",
              "perdió",
              "perdimos",
              "perdisteis",
              "perdieron"
            ],
            "Imperfecto": [
              "perdía",
              "perdías",
              "perdía",
              "perdíamos",
              "perdíais",
              "perdían"
            ],
            "Futuro": [
              "perderé",
              "perderás",
              "perderá",
              "perderemos",
              "perderéis",
              "perderán"
            ],
            "Condicional": [
              "perdería",
              "perderías",
              "perdería",
              "perderíamos",
              "perderíais",
              "perderían"
            ],
            "Subjuntivo": [
              "pierda",
              "pierdas",
              "pierda",
              "perdamos",
              "perdáis",
              "pierdan"
            ]
          }
        }
      },
      {
        "en": "guide (person)",
        "es": "el/la guía",
        "gender": "m./f.",
        "exEn": "The guide explained the history of the castle.",
        "exEs": "El guía explicó la historia del castillo."
      },
      {
        "en": "to book / to reserve",
        "es": "reservar",
        "gender": null,
        "exEn": "I want to book a room for two nights.",
        "exEs": "Quiero reservar una habitación para dos noches.",
        "conj": {
          "verb": "reservar",
          "tenses": {
            "Presente": [
              "reservo",
              "reservas",
              "reserva",
              "reservamos",
              "reserváis",
              "reservan"
            ],
            "Pretérito": [
              "reservé",
              "reservaste",
              "reservó",
              "reservamos",
              "reservsteis",
              "reservaron"
            ],
            "Imperfecto": [
              "reservaba",
              "reservabas",
              "reservaba",
              "reservábamos",
              "reservabais",
              "reservaban"
            ],
            "Futuro": [
              "reservaré",
              "reservarás",
              "reservará",
              "reservaremos",
              "reservaréis",
              "reservarán"
            ],
            "Condicional": [
              "reservaría",
              "reservarías",
              "reservaría",
              "reservaríamos",
              "reservaríais",
              "reservarían"
            ],
            "Subjuntivo": [
              "reserve",
              "reserves",
              "reserve",
              "reservemos",
              "reservéis",
              "reserven"
            ]
          }
        }
      },
      {
        "en": "delay",
        "es": "el retraso",
        "gender": "m.",
        "exEn": "The flight has a two-hour delay.",
        "exEs": "El vuelo tiene un retraso de dos horas."
      },
      {
        "en": "abroad",
        "es": "en el extranjero",
        "gender": null,
        "exEn": "She studied abroad for a year.",
        "exEs": "Estudió en el extranjero durante un año."
      },
      {
        "en": "souvenir",
        "es": "el recuerdo",
        "gender": "m.",
        "exEn": "I bought some souvenirs for my family.",
        "exEs": "Compré algunos recuerdos para mi familia."
      },
      {
        "en": "one-way ticket",
        "es": "el billete de ida",
        "gender": "m.",
        "exEn": "Just a one-way ticket, please.",
        "exEs": "Solo un billete de ida, por favor."
      },
      {
        "en": "landscape",
        "es": "el paisaje",
        "gender": "m.",
        "exEn": "The landscape in the south is stunning.",
        "exEs": "El paisaje del sur es impresionante."
      },
      {
        "en": "to get lost",
        "es": "perderse",
        "gender": null,
        "exEn": "We got lost in the old town.",
        "exEs": "Nos perdimos en el casco antiguo.",
        "conj": {
          "verb": "perderse",
          "tenses": {
            "Presente": [
              "me pierdo",
              "te pierdes",
              "se pierde",
              "nos perdemos",
              "os perdéis",
              "se pierden"
            ],
            "Pretérito": [
              "me perdí",
              "te perdiste",
              "se perdió",
              "nos perdimos",
              "os perdisteis",
              "se perdieron"
            ],
            "Imperfecto": [
              "me perdía",
              "te perdías",
              "se perdía",
              "nos perdíamos",
              "os perdíais",
              "se perdían"
            ],
            "Futuro": [
              "me perderé",
              "te perderás",
              "se perderá",
              "nos perderemos",
              "os perderéis",
              "se perderán"
            ],
            "Condicional": [
              "me perdería",
              "te perderías",
              "se perdería",
              "nos perderíamos",
              "os perderíais",
              "se perderían"
            ],
            "Subjuntivo": [
              "me pierda",
              "te pierdas",
              "se pierda",
              "nos perdamos",
              "os perdáis",
              "se pierdan"
            ]
          }
        }
      }
    ]
  },
  {
    "name": "Abstract & Opinion",
    "icon": "💭",
    "words": [
      {
        "en": "however",
        "es": "sin embargo",
        "gender": null,
        "exEn": "It's expensive; however, it's worth it.",
        "exEs": "Es caro; sin embargo, merece la pena."
      },
      {
        "en": "despite",
        "es": "a pesar de",
        "gender": null,
        "exEn": "Despite the rain, we went out.",
        "exEs": "A pesar de la lluvia, salimos."
      },
      {
        "en": "to raise (a question)",
        "es": "plantear",
        "gender": null,
        "exEn": "She raised an interesting question.",
        "exEs": "Planteó una pregunta interesante.",
        "conj": {
          "verb": "plantear",
          "tenses": {
            "Presente": [
              "planteo",
              "planteas",
              "plantea",
              "planteamos",
              "planteáis",
              "plantean"
            ],
            "Pretérito": [
              "planteé",
              "planteaste",
              "planteó",
              "planteamos",
              "plantesteis",
              "plantearon"
            ],
            "Imperfecto": [
              "planteaba",
              "planteabas",
              "planteaba",
              "planteábamos",
              "planteabais",
              "planteaban"
            ],
            "Futuro": [
              "plantearé",
              "plantearás",
              "planteará",
              "plantearemos",
              "plantearéis",
              "plantearán"
            ],
            "Condicional": [
              "plantearía",
              "plantearías",
              "plantearía",
              "plantearíamos",
              "plantearíais",
              "plantearían"
            ],
            "Subjuntivo": [
              "plantee",
              "plantees",
              "plantee",
              "planteemos",
              "planteéis",
              "planteen"
            ]
          }
        }
      },
      {
        "en": "to question",
        "es": "cuestionar",
        "gender": null,
        "exEn": "We should question that decision.",
        "exEs": "Deberíamos cuestionar esa decisión.",
        "conj": {
          "verb": "cuestionar",
          "tenses": {
            "Presente": [
              "cuestiono",
              "cuestionas",
              "cuestiona",
              "cuestionamos",
              "cuestionáis",
              "cuestionan"
            ],
            "Pretérito": [
              "cuestioné",
              "cuestionaste",
              "cuestionó",
              "cuestionamos",
              "cuestionsteis",
              "cuestionaron"
            ],
            "Imperfecto": [
              "cuestionaba",
              "cuestionabas",
              "cuestionaba",
              "cuestionábamos",
              "cuestionabais",
              "cuestionaban"
            ],
            "Futuro": [
              "cuestionaré",
              "cuestionarás",
              "cuestionará",
              "cuestionaremos",
              "cuestionaréis",
              "cuestionarán"
            ],
            "Condicional": [
              "cuestionaría",
              "cuestionarías",
              "cuestionaría",
              "cuestionaríamos",
              "cuestionaríais",
              "cuestionarían"
            ],
            "Subjuntivo": [
              "cuestione",
              "cuestiones",
              "cuestione",
              "cuestionemos",
              "cuestionéis",
              "cuestionen"
            ]
          }
        }
      },
      {
        "en": "to achieve",
        "es": "lograr",
        "gender": null,
        "exEn": "He achieved his goal.",
        "exEs": "Logró su objetivo.",
        "conj": {
          "verb": "lograr",
          "tenses": {
            "Presente": [
              "logro",
              "logras",
              "logra",
              "logramos",
              "lográis",
              "logran"
            ],
            "Pretérito": [
              "logré",
              "lograste",
              "logró",
              "logramos",
              "logrsteis",
              "lograron"
            ],
            "Imperfecto": [
              "lograba",
              "lograbas",
              "lograba",
              "lográbamos",
              "lograbais",
              "lograban"
            ],
            "Futuro": [
              "lograré",
              "lograrás",
              "logrará",
              "lograremos",
              "lograréis",
              "lograrán"
            ],
            "Condicional": [
              "lograría",
              "lograrías",
              "lograría",
              "lograríamos",
              "lograríais",
              "lograrían"
            ],
            "Subjuntivo": [
              "logre",
              "logres",
              "logre",
              "logremos",
              "logréis",
              "logren"
            ]
          }
        }
      },
      {
        "en": "lack",
        "es": "la falta",
        "gender": "f.",
        "exEn": "There's a lack of resources.",
        "exEs": "Hay una falta de recursos."
      },
      {
        "en": "to belong",
        "es": "pertenecer",
        "gender": null,
        "exEn": "This land belongs to the state.",
        "exEs": "Esta tierra pertenece al estado.",
        "conj": {
          "verb": "pertenecer",
          "tenses": {
            "Presente": [
              "pertenezco",
              "perteneces",
              "pertenece",
              "pertenecemos",
              "pertenecéis",
              "pertenecen"
            ],
            "Pretérito": [
              "pertenecí",
              "perteneciste",
              "perteneció",
              "pertenecimos",
              "pertenecisteis",
              "pertenecieron"
            ],
            "Imperfecto": [
              "pertenecía",
              "pertenecías",
              "pertenecía",
              "pertenecíamos",
              "pertenecíais",
              "pertenecían"
            ],
            "Futuro": [
              "perteneceré",
              "pertenecerás",
              "pertenecerá",
              "perteneceremos",
              "perteneceréis",
              "pertenecerán"
            ],
            "Condicional": [
              "pertenecería",
              "pertenecerías",
              "pertenecería",
              "perteneceríamos",
              "perteneceríais",
              "pertenecerían"
            ],
            "Subjuntivo": [
              "pertenezca",
              "pertenezcas",
              "pertenezca",
              "pertenezcamos",
              "pertenezcáis",
              "pertenezcan"
            ]
          }
        }
      },
      {
        "en": "development",
        "es": "el desarrollo",
        "gender": "m.",
        "exEn": "The development of the project is going well.",
        "exEs": "El desarrollo del proyecto va bien."
      },
      {
        "en": "moreover / furthermore",
        "es": "además",
        "gender": null,
        "exEn": "Moreover, the price includes breakfast.",
        "exEs": "Además, el precio incluye el desayuno."
      },
      {
        "en": "therefore",
        "es": "por lo tanto",
        "gender": null,
        "exEn": "It's late; therefore, we should leave.",
        "exEs": "Es tarde; por lo tanto, deberíamos irnos."
      },
      {
        "en": "to support (an idea)",
        "es": "apoyar",
        "gender": null,
        "exEn": "I support your proposal.",
        "exEs": "Apoyo tu propuesta.",
        "conj": {
          "verb": "apoyar",
          "tenses": {
            "Presente": [
              "apoyo",
              "apoyas",
              "apoya",
              "apoyamos",
              "apoyáis",
              "apoyan"
            ],
            "Pretérito": [
              "apoyé",
              "apoyaste",
              "apoyó",
              "apoyamos",
              "apoysteis",
              "apoyaron"
            ],
            "Imperfecto": [
              "apoyaba",
              "apoyabas",
              "apoyaba",
              "apoyábamos",
              "apoyabais",
              "apoyaban"
            ],
            "Futuro": [
              "apoyaré",
              "apoyarás",
              "apoyará",
              "apoyaremos",
              "apoyaréis",
              "apoyarán"
            ],
            "Condicional": [
              "apoyaría",
              "apoyarías",
              "apoyaría",
              "apoyaríamos",
              "apoyaríais",
              "apoyarían"
            ],
            "Subjuntivo": [
              "apoye",
              "apoyes",
              "apoye",
              "apoyemos",
              "apoyéis",
              "apoyen"
            ]
          }
        }
      },
      {
        "en": "inequality",
        "es": "la desigualdad",
        "gender": "f.",
        "exEn": "Social inequality keeps growing.",
        "exEs": "La desigualdad social sigue creciendo."
      }
    ]
  }
];
