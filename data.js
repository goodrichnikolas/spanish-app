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
          "forms": [
            "estoy",
            "estás",
            "está",
            "estamos",
            "estáis",
            "están"
          ]
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
          "forms": [
            "tengo",
            "tienes",
            "tiene",
            "tenemos",
            "tenéis",
            "tienen"
          ]
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
          "forms": [
            "me enfado",
            "te enfadas",
            "se enfada",
            "nos enfadamos",
            "os enfadáis",
            "se enfadan"
          ]
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
          "forms": [
            "echo",
            "echas",
            "echa",
            "echamos",
            "echáis",
            "echan"
          ]
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
          "forms": [
            "solicito",
            "solicitas",
            "solicita",
            "solicitamos",
            "solicitáis",
            "solicitan"
          ]
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
          "forms": [
            "despido",
            "despides",
            "despide",
            "despedimos",
            "despedís",
            "despiden"
          ]
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
          "forms": [
            "me jubilo",
            "te jubilas",
            "se jubila",
            "nos jubilamos",
            "os jubiláis",
            "se jubilan"
          ]
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
          "forms": [
            "me encargo",
            "te encargas",
            "se encarga",
            "nos encargamos",
            "os encargáis",
            "se encargan"
          ]
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
          "forms": [
            "gano",
            "ganas",
            "gana",
            "ganamos",
            "ganáis",
            "ganan"
          ]
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
          "forms": [
            "me desmayo",
            "te desmayas",
            "se desmaya",
            "nos desmayamos",
            "os desmayáis",
            "se desmayan"
          ]
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
          "forms": [
            "curo",
            "curas",
            "cura",
            "curamos",
            "curáis",
            "curan"
          ]
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
          "forms": [
            "sangro",
            "sangras",
            "sangra",
            "sangramos",
            "sangráis",
            "sangran"
          ]
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
          "forms": [
            "estornudo",
            "estornudas",
            "estornuda",
            "estornudamos",
            "estornudáis",
            "estornudan"
          ]
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
          "forms": [
            "me hincho",
            "te hinchas",
            "se hincha",
            "nos hinchamos",
            "os hincháis",
            "se hinchan"
          ]
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
          "forms": [
            "enchufo",
            "enchufas",
            "enchufa",
            "enchufamos",
            "enchufáis",
            "enchufan"
          ]
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
          "forms": [
            "barro",
            "barres",
            "barre",
            "barremos",
            "barréis",
            "barren"
          ]
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
          "forms": [
            "plancho",
            "planchas",
            "plancha",
            "planchamos",
            "plancháis",
            "planchan"
          ]
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
          "forms": [
            "goteo",
            "goteas",
            "gotea",
            "goteamos",
            "goteáis",
            "gotean"
          ]
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
          "forms": [
            "pierdo",
            "pierdes",
            "pierde",
            "perdemos",
            "perdéis",
            "pierden"
          ]
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
          "forms": [
            "reservo",
            "reservas",
            "reserva",
            "reservamos",
            "reserváis",
            "reservan"
          ]
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
          "forms": [
            "me pierdo",
            "te pierdes",
            "se pierde",
            "nos perdemos",
            "os perdéis",
            "se pierden"
          ]
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
          "forms": [
            "planteo",
            "planteas",
            "plantea",
            "planteamos",
            "planteáis",
            "plantean"
          ]
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
          "forms": [
            "cuestiono",
            "cuestionas",
            "cuestiona",
            "cuestionamos",
            "cuestionáis",
            "cuestionan"
          ]
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
          "forms": [
            "logro",
            "logras",
            "logra",
            "logramos",
            "lográis",
            "logran"
          ]
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
          "forms": [
            "pertenezco",
            "perteneces",
            "pertenece",
            "pertenecemos",
            "pertenecéis",
            "pertenecen"
          ]
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
          "forms": [
            "apoyo",
            "apoyas",
            "apoya",
            "apoyamos",
            "apoyáis",
            "apoyan"
          ]
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
