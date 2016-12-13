"use strict";

var Body = React.createClass({
  displayName: "Body",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "well well-lg" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-xs-20" },
              React.createElement(
                "h1",
                { className: "text-center" },
                "Ariyo Barzan"
              ),
              React.createElement(
                "h4",
                { className: "text-center" },
                "Ariyo barzanes the Brave was a Persian satrap and military commander who led a last stand of the Persian army at the Battle of the Persian Gate against Macedonian King Alexander the Great in the winter of 330 BC"
              ),
              React.createElement(
                "div",
                null,
                React.createElement("img", { "class": "img-rounded", alt: "Ariyo Barzan warrior", width: "100%", src: "http://cgart.ir/sites/default/files/users/2595/images/ariobarzan_finam_2.jpg" }),
                React.createElement(
                  "h5",
                  { className: "text-center text-primary" },
                  "also spelled as Ario Barzan or Aryo Barzan"
                )
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "strong",
                    null,
                    "Family "
                  ),
                  React.createElement(
                    "p",
                    null,
                    "Satrap or Satrapes, derived from Old Persian xsatrapa, means the Protector of the Land, and it was the name given to the provincial governors in the ancient Achaemenid Empire. Darius I or Darius the Great (522-486 BC) established 20 satraps with an annual tribute. Appointed by the king, satraps were usually of the royal family or Iranian nobility and held office indefinitely. They collected taxes, were the highest judicial authority, and were responsible for internal security and for raising and maintaining an army. A satrap was assisted by a council of Iranian noblemen, to which also provincials were admitted; and was controlled by a royal secretary and by emissaries of the king, especially the Eyes of the King. After the fall of Achaemenid Empire, Alexander the Great and his successors retained the satraps."
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "strong",
                    null,
                    "Life"
                  ),
                  React.createElement(
                    "p",
                    null,
                    "Though the exact birth-date of Ariobarzanes is unknown, it is speculated that he was born around 368 BC. His sister was the ancient Persian noblewoman and warrior, Youtab. Ariobarzanes was made satrap of Persis (the southern province of Fars in present-day Iran) in 335 BC by Darius III. Historians are surprised that Darius III Codomannus had appointed a satrap for Persepolis and Persis. It seems that previously, this office did not exist. Ariobarzanes commanded part of the Persian Army fighting against the Macedonians at Gaugamela in 331 BC."
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "strong",
                    null,
                    "Death"
                  ),
                  React.createElement(
                    "p",
                    null,
                    "Following the Persian defeat at Gaugamela, Darius III realized he could not defend his capital Persepolis and travelled east to rebuild his armies, leaving Ariobarzanes in command. Meanwhile, Alexander the Great split his army and led his 14,000 strong force towards the Persian capital via the Persian Gates. There Ariobarzanes successfully ambushed Alexander the Great's army, inflicting heavy casualties. The Persian success at the Battle of the Persian Gate was short lived though; after being held off for 30 days, Alexander the Great outflanked and destroyed the defenders. Ariobarzanes himself was killed either during the battle or during the retreat to Persepolis. Some sources indicate that the Persian were betrayed by a captured tribal chief who showed the Macedonians an alternate path that allowed them to outflank Ariobarzanes in a reversal of Thermopylae."
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "text-center" },
              "more information ",
              React.createElement(
                "a",
                { herf: "https://en.wikipedia.org/wiki/Ariobarzanes_of_Persis", target: "_blank" },
                "wiki pedia"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "text-center" },
          "Written and coded by ",
          React.createElement(
            "a",
            { herf: "https://ir.linkedin.com/in/ramin-mehrabi-1a8836117", target: "_blank" },
            "Ramin Mehrabi"
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Body, null), document.getElementById("contain"));