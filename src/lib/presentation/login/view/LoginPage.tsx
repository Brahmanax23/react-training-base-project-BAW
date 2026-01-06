// import LoginController from "../controller/LoginController.ts";

// import { useController } from "../../../util/Hooks.ts";
// import { LoginServiceImpl } from "../service/LoginService.ts";
// import HttpUtilImpl from "../../../network/HttpUtilImpl.ts";
import BaseText from "../../../shared/flutter/widget/text/BaseText.tsx";
import BaseColumn from "../../../shared/flutter/widget/column/BaseColumn.tsx";
import BaseRow from "../../../shared/flutter/widget/row/BaseRow.tsx";
import {
  TextAlign,
  TextOverflow,
  FontWeight,
  FontStyle,
} from "../../../shared/flutter/widget/text/BaseTextEnum.ts";
import { TextStyle } from "../../../shared/flutter/widget/text/BaseTextStyle.ts";
import { CrossAxisAlignment } from "../../../shared/flutter/constant/enum/CrossAxisAlignment.ts";
import { MainAxisAlignment } from "../../../shared/flutter/constant/enum/MainAxisAlignment.ts";
import { MainAxisSize } from "../../../shared/flutter/constant/enum/MainAxisSize.ts";
// import { BoxConstraints } from "../../../shared/flutter/constant/class/BoxConstraints.ts";
import { BoxDecoration } from "../../../shared/flutter/constant/class/BoxDecoration.ts";
import { BoxShadow } from "../../../shared/flutter/constant/class/BoxShadow.ts";
import { EdgeInsets } from "../../../shared/flutter/constant/class/EdgeInsets.ts";
import { Offset } from "../../../shared/flutter/constant/class/Offset.ts";
import { BoxShape } from "../../../shared/flutter/constant/enum/BoxShapeEnum.ts";
import BaseContainer from "../../../shared/flutter/widget/container/BaseContainer.tsx";
import { BorderRadius } from "../../../shared/flutter/constant/class/BorderRadius.ts";
import { ScaffoldStyle } from "../../../shared/flutter/widget/scaffold/ScaffoldStyle.ts";
// import { PreferredSize } from "../../../shared/flutter/constant/class/PreferredSize.ts";
// import { Size } from "../../../shared/flutter/constant/class/Size.ts";
import Scaffold from "../../../shared/flutter/widget/scaffold/Scaffold.tsx";
import { BoxConstraints } from "../../../shared/flutter/constant/class/BoxConstraints.ts";
// import LoginViewModel from "../model/LoginViewModel.ts";
// import { useAuth } from "../../layout/auth_provider/view/AuthProviderContext.tsx";
// import Expanded from "../../../shared/flutter/widget/expanded/Expanded.tsx";
// import { MediaQuery } from "../../../shared/flutter/constant/class/mediaquery/MediaQuery.ts";

LoginPage.page = "/login_page";

export default function LoginPage() {
  //   const auth = useAuth();
  //   const controller = useController(() => {
  //     const http = new HttpUtilImpl();
  //     const service = new LoginServiceImpl({ http });
  //     const model = new LoginViewModel(auth);
  //     return new LoginController({
  //       service: service,
  //       model: model,
  //     });
  //   });

  const scaffold = new ScaffoldStyle({
    backgroundColor: "#606068ff",
    body: (
      <BaseColumn
        mainAxisAlignment={MainAxisAlignment.start}
        crossAxisAlignment={CrossAxisAlignment.start}
        mainAxisSize={MainAxisSize.max}
      >
        {/* buat widget seperti appbar dengan expanded dan container di bawah tinggal pakai */}
        {/* TERUTAMA CARI CARA UNTUK BISA MEDIAQUERY AGAR BISA FULLWIDTH LAYAR */}

        <BaseRow
          wrap
          mainAxisAlignment={MainAxisAlignment.start}
          crossAxisAlignment={CrossAxisAlignment.start}
        >
          {["#0818a88c", "#a80b088c", "#08a86b8c", "#a808a88c"].map(
            (color, i) => (
              <BaseContainer
                key={i}
                constraints={new BoxConstraints({ maxWidth: 400 })}
                margin={EdgeInsets.all(8)}
                padding={EdgeInsets.all(15)}
                decoration={
                  new BoxDecoration({
                    color,
                    borderRadius: BorderRadius.circular(16),
                    boxShadow: [
                      new BoxShadow({
                        color: "hsla(0,0%,0%,0.25)",
                        blurRadius: 8,
                        offset: new Offset(0, 4),
                      }),
                    ],
                  })
                }
              >
                <BaseText
                  maxLines={2}
                  overflow={TextOverflow.ellipsis}
                  style={
                    new TextStyle({
                      fontSize: 16,
                      fontWeight: FontWeight.semiBold,
                      color: "#ffffff",
                    })
                  }
                >
                  Ini adalah contoh teks yang sangat panjang dan sengaja dibuat
                  bertele-tele untuk keperluan pengujian komponen Text atau
                  BaseText di aplikasi React yang menggunakan Tailwind CSS,
                  terutama untuk memastikan bahwa fitur seperti text overflow,
                  ellipsis, maxLines, textAlign, fontWeight, fontStyle, serta
                  perilaku layout di dalam Column atau Row dapat berjalan dengan
                  benar tanpa adanya bug layout, pemotongan teks yang tidak
                  diinginkan, atau perilaku aneh ketika teks dirender dalam
                  berbagai ukuran layar, container flex, maupun kondisi
                  responsive yang berbeda-beda.
                </BaseText>
              </BaseContainer>
            )
          )}
        </BaseRow>

        <BaseRow
        // wrap 
        mainAxisAlignment={MainAxisAlignment.start}>
          <BaseContainer
            padding={EdgeInsets.all(10)}
            margin={EdgeInsets.symmetric({ horizontal: 8 })}
            constraints={new BoxConstraints({ maxWidth: 1040 })}
            decoration={
              new BoxDecoration({
                color: "#0818a88c",
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  new BoxShadow({
                    color: "hsla(0, 0%, 0%, 0.30)",
                    blurRadius: 8,
                    offset: new Offset(0, 4),
                  }),
                ],
              })
            }
          >
            <BaseText
              textAlign={TextAlign.left}
              overflow={TextOverflow.ellipsis}
              maxLines={2}
              style={
                new TextStyle({
                  fontSize: 20,
                  fontWeight: FontWeight.semiBold,
                  fontFamily: "font-lato",
                  // fontStyle: FontStyle.italic,
                  color: "#000000",
                })
              }
            >
              Ini adalah contoh teks yang sangat panjang dan sengaja dibuat
              bertele-tele untuk keperluan pengujian komponen Text atau BaseText
              di aplikasi React yang menggunakan Tailwind CSS, terutama untuk
              memastikan bahwa fitur seperti text overflow, ellipsis, maxLines,
              textAlign, fontWeight, fontStyle, serta perilaku layout di dalam
              Column atau Row dapat berjalan dengan benar tanpa adanya bug
              layout, pemotongan teks yang tidak diinginkan, atau perilaku aneh
              ketika teks dirender dalam berbagai ukuran layar, container flex,
              maupun kondisi responsive yang berbeda-beda.
            </BaseText>
          </BaseContainer>

          <BaseContainer
            margin={EdgeInsets.symmetric({ horizontal: 8 })}
            padding={EdgeInsets.all(10)}
            decoration={
              new BoxDecoration({
                color: "#a80b088c",
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  new BoxShadow({
                    color: "hsla(0, 0%, 0%, 0.30)",
                    blurRadius: 8,
                    offset: new Offset(0, 4),
                  }),
                ],
              })
            }
          >
            <BaseText
              textAlign={TextAlign.left}
              overflow={TextOverflow.clip}
              maxLines={2}
              style={
                new TextStyle({
                  fontSize: 20,
                  fontWeight: FontWeight.semiBold,
                  fontFamily: "font-lato",
                  // fontStyle: FontStyle.italic,
                  color: "#000000",
                })
              }
            >
              Ini adalah contoh teks yang sangat panjang dan sengaja dibuat
              bertele-tele untuk keperluan pengujian komponen Text atau BaseText
              di aplikasi React yang menggunakan Tailwind CSS.
            </BaseText>
          </BaseContainer>
        </BaseRow>

        <BaseColumn
          mainAxisAlignment={MainAxisAlignment.start}
          crossAxisAlignment={CrossAxisAlignment.start}
          mainAxisSize={MainAxisSize.min}
        >
          <BaseText
            textAlign={TextAlign.left}
            overflow={TextOverflow.ellipsis}
            maxLines={3}
            style={
              new TextStyle({
                fontSize: 32,
                fontWeight: FontWeight.semiBold,
                fontFamily: "font-lato",
                fontStyle: FontStyle.italic,
                color: "#00FFFF",
              })
            }
          >
            Ini adalah contoh teks yang sangat panjang dan sengaja dibuat
            bertele-tele untuk keperluan pengujian komponen Text atau BaseText
            di aplikasi React yang menggunakan Tailwind CSS, terutama untuk
            memastikan bahwa fitur seperti text overflow, ellipsis, maxLines,
            textAlign, fontWeight, fontStyle, serta perilaku layout di dalam
            Column atau Row dapat berjalan dengan benar tanpa adanya bug layout,
            pemotongan teks yang tidak diinginkan, atau perilaku aneh ketika
            teks dirender dalam berbagai ukuran layar, container flex, maupun
            kondisi responsive yang berbeda-beda.
          </BaseText>

          <BaseText
            // textAlign={TextAlign.left}
            overflow={TextOverflow.ellipsis}
            maxLines={1}
            style={
              new TextStyle({
                fontSize: 20,
                fontWeight: FontWeight.bold,
                fontFamily: "font-lato",
                fontStyle: FontStyle.underline,
                color: "#0818A8",
              })
            }
          >
            kontolatos
          </BaseText>

          <BaseContainer
            padding={EdgeInsets.all(5)}
            margin={EdgeInsets.symmetric({ horizontal: 8 })}
            decoration={
              new BoxDecoration({
                color: "#0818A8",
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  new BoxShadow({
                    color: "hsla(0, 0%, 0%, 0.30)",
                    blurRadius: 8,
                    offset: new Offset(0, 4),
                  }),
                ],
              })
            }
          >
            <BaseColumn
              mainAxisAlignment={MainAxisAlignment.center}
              crossAxisAlignment={CrossAxisAlignment.center}
              mainAxisSize={MainAxisSize.min}
            >
              <BaseText
                textAlign={TextAlign.left}
                overflow={TextOverflow.ellipsis}
                maxLines={1}
                style={
                  new TextStyle({
                    fontSize: 10,
                    fontWeight: FontWeight.bold,
                    // fontFamily: 'font-lato',
                    fontStyle: FontStyle.underline,
                    color: "#eaeaeaff",
                  })
                }
              >
                Ini container
              </BaseText>
            </BaseColumn>
          </BaseContainer>
        </BaseColumn>
      </BaseColumn>
    ),
  });

  return <Scaffold value={scaffold} />;
}

// export default function LoginPage() {
//   const auth = useAuth();
//   const controller = useController(() => {
//     const http = new HttpUtilImpl();
//     const service = new LoginServiceImpl({ http });
//     const model = new LoginViewModel(auth);
//     return new LoginController({
//       service: service,
//       model: model,
//     });
//   });

//   return (

//   );
// }
