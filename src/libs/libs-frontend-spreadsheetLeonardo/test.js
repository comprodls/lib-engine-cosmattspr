$(document).ready(function () {

	$("#spreadsheet").spreadsheetLeonardo({
			"config": {
        "data": [
          [
            "Segment Number",
            "Segment Duration (t)<br>s",
            "Acceleration (a)<br>rad/s<sup>2</sup>",
            "Load Inertia<br>Kg-m<sup>2</sup>",
            "Total Load Torque<br>Nm",
            "Motor Inertia<br>Kg-m<sup>2</sup>",
            "Motor Acceleration Torque<br>Nm",
            "Total Motor Torque<br>Nm",
            "Tq<sup>2</sup> x Time"
          ],
          [
            "1",
            "0.04",
            "654.4985",
            "0.05",
            "35.42492",
            "0.0012",
            "",
            ""
          ],
          [
            "2",
            "0.04",
            "0",
            "0.05",
            "2.7",
            "0.0012",
            "",
            ""
          ],
          [
            "3",
            "0.04",
            "-654.4985",
            "0.05",
            "-30.0249",
            "0.0012",
            "",
            ""
          ],
          [
            "4",
            "0.1",
            "0",
            "0.05",
            "0.4",
            "0.0012",
            "",
            ""
          ],
          [
            "5",
            "0.05",
            "523.59878",
            "0.05",
            "28.87994",
            "0.0012",
            "",
            ""
          ],
          [
            "6",
            "0.05",
            "0",
            "0.05",
            "2.7",
            "0.0012",
            "",
            ""
          ],
          [
            "7",
            "0.05",
            "-523.59878",
            "0.05",
            "-23.4799",
            "0.0012",
            "",
            ""
          ],
          [
            "8",
            "0.2",
            "0",
            "0.05",
            "0.4",
            "0.0012",
            "",
            ""
          ],
          [
            "9",
            "0.2",
            "-58.90486",
            "0.05",
            "-4.84524",
            "0.0012",
            "",
            ""
          ],
          [
            "10",
            "0.2",
            "0",
            "0.05",
            "-1.9",
            "0.0012",
            "",
            ""
          ],
          [
            "11",
            "0.2",
            "58.90486",
            "0.05",
            "1.045243",
            "0.0012",
            "",
            ""
          ],
          [
            "12",
            "0.3",
            "0",
            "0.05",
            "0.4",
            "0.0012",
            "",
            ""
          ],
          [
            "Total",
            "=SUM(B2:B13)",
            "",
            "",
            "",
            "",
            "=SUM(G2:G13)",
            "=SUM(H2:H13)",
            "=SUM(I2:I13)"
          ],
          [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "RMS Torque",
            "",
            "Nm",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Peak Torque",
            "",
            "Nm",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Maximum Speed",
            "",
            "rev/s",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        ],
        "styles": {
          "numberFormats": [
            {
              "id": 0,
              "cat": "General"
            }
          ],
          "alignments": [
            {
              "id": 0,
              "horizontal": "center",
              "vertical": "middle",
              "wraptext": true
            }
          ],
          "colorfills": [
            {
              "id": 4,
              "color": "#FFFFCC"
            }
          ]
        },
        "columns": {
          "0": {
            "width": 160
          },
          "1": {
            "width": 180
          },
          "2": {
            "width": 180
          },
          "3": {
            "width": 150
          },
          "4": {
            "width": 180
          },
          "5": {
            "width": 180
          },
          "6": {
            "width": 220
          },
          "7": {
            "width": 220
          },
          "8": {
            "width": 180
          }
        },
        "rows": {
          "0": {
            "height":43,
            "cells": {
              "0": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "1": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "2": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "3": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "4": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "5": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "fontWeight": "bold"
              }
            }
          },
          "1": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "2": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "3": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "4": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "5": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "6": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "7": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "8": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "9": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "10": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "11": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "12": {
            "cells": {
              "6": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "7": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              },
              "8": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "15": {
            "cells": {
              "0": {
                "fontWeight": "bold"
              },
              "1": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "16": {
            "cells": {
              "0": {
                "fontWeight": "bold"
              },
              "1": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          },
          "17": {
            "cells": {
              "0": {
                "fontWeight": "bold"
              },
              "1": {
                "numberFormat": 0,
                "alignment": 0,
                "readOnly": false
              }
            }
          }
        },
        "mergedranges": [],
        "options": {
          "rowheaders": true,
          "colheaders": true,
          "formulas": true,
          "manualcolumnresize": false,
          "defaultAlign": {
            "horizontal": "center",
            "vertical": "middle"
          },
          "maxRows": 20,
          "readOnly": true,
          "readOnlyCellStyles": "{background-color:#F2F2F2; color:black;}",
          "tolerance": 1,
          "containerStyles":"{box-shadow: 6px 6px 9px #ddd; border: 1px solid #ddd;}"

        },
        "modeconfig": {
          "mode": "Training",
          "role": "student",
          "showHintsBtn": false,
          "showCheckAnswerBtn": false,
          "hideTopBar": false
        },

        "currentState": {
          "cell": {
            "row": "",
            "col": ""
          }
        }
      },
      "correctData": [
        [
          "Segment Number",
          "Segment Duration (t)<br>s",
          "Acceleration (a)<br>rad/s<sup>2</sup>",
          "Load Inertia<br>Kg-m<sup>2</sup>",
          "Total Load Torque<br>Nm",
          "Motor Inertia<br>Kg-m<sup>2</sup>",
          "Motor Acceleration Torque<br>Nm",
          "Total Motor Torque<br>Nm",
          "Tq<sup>2</sup> x Time"
        ],
        [
          "1",
          "0.04",
          "654.4985",
          "0.05",
          "35.42492",
          "0.0012",
          "0.785398163",
          "36.21032",
          "52.4475"
        ],
        [
          "2",
          "0.04",
          "0",
          "0.05",
          "2.7",
          "0.0012",
          "0",
          "2.7",
          "0.2916"
        ],
        [
          "3",
          "0.04",
          "-654.4985",
          "0.05",
          "-30.0249",
          "0.0012",
          "-0.785398163",
          "-30.8103",
          "37.97104"
        ],
        [
          "4",
          "0.1",
          "0",
          "0.05",
          "0.4",
          "0.0012",
          "0",
          "0.4",
          "0.016"
        ],
        [
          "5",
          "0.05",
          "523.59878",
          "0.05",
          "28.87994",
          "0.0012",
          "0.628318531",
          "29.50826",
          "43.53686"
        ],
        [
          "6",
          "0.05",
          "0",
          "0.05",
          "2.7",
          "0.0012",
          "0",
          "2.7",
          "0.3645"
        ],
        [
          "7",
          "0.05",
          "-523.59878",
          "0.05",
          "-23.4799",
          "0.0012",
          "-0.628318531",
          "-24.1083",
          "29.0604"
        ],
        [
          "8",
          "0.2",
          "0",
          "0.05",
          "0.4",
          "0.0012",
          "0",
          "0.4",
          "0.032"
        ],
        [
          "9",
          "0.2",
          "-58.90486",
          "0.05",
          "-4.84524",
          "0.0012",
          "-0.070685835",
          "-4.91593",
          "4.833271"
        ],
        [
          "10",
          "0.2",
          "0",
          "0.05",
          "-1.9",
          "0.0012",
          "0",
          "-1.9",
          "0.722"
        ],
        [
          "11",
          "0.2",
          "58.90486",
          "0.05",
          "1.045243",
          "0.0012",
          "0.070685835",
          "1.115929",
          "0.249059"
        ],
        [
          "12",
          "0.3",
          "0",
          "0.05",
          "0.4",
          "0.0012",
          "0",
          "0.4",
          "0.0528"
        ],
        [
          "Total",
          "=SUM(B2:B13)",
          "=SUM(C2:C13)",
          "",
          "",
          "",
          "=SUM(G2:G13)",
          "=SUM(H2:H13)",
          "=SUM(I2:I13)"
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "RMS Torque",
          "10.63256",
          "Nm",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "Peak Torque",
          "36.21032",
          "Nm",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "Maximum Speed",
          "1500",
          "rev/s",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      "style": {
        "width": "100%",
        "height": "700"
      }
		});
});