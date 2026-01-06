// foundation/MediaQuery.ts
import { Orientation } from "../../enum/Orientation";
import { EdgeInsets } from "../EdgeInsets";
import { MediaQueryData } from "./MediaQueryData";
import { MediaSize } from "./MediaSize";

export class MediaQuery {
  private static _instance: MediaQueryData | null = null;

  static of(): MediaQueryData {
    if (!this._instance) {
      this._instance = this._create();
      this._listen();
    }
    return this._instance;
  }

  private static _create(): MediaQueryData {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return new MediaQueryData({
      size: new MediaSize(width, height),
      devicePixelRatio: window.devicePixelRatio || 1,
      orientation:
        width > height ? Orientation.landscape : Orientation.portrait,
      padding: EdgeInsets.zero,
      viewInsets: EdgeInsets.zero,
    });
  }

  private static _listen() {
    window.addEventListener("resize", () => {
      this._instance = this._create();
    });
  }
}

//Below is the code example of using mediaquery. Here, the behavior is difference
// with mediaquery used in flutter in mobile. This mediaquery will be  used as decision maker in multi platform device,
// to detect the user device and monitor size.

// const mq = MediaQuery.of();

// <BaseContainer
//   padding={
//     mq.isMobile
//       ? EdgeInsets.all(8)
//       : EdgeInsets.symmetric({ horizontal: 24, vertical: 16 })
//   }

//   margin={
//     mq.isMobile
//       ? EdgeInsets.all(8)
//       : EdgeInsets.symmetric({ horizontal: 32 })
//   }

//   constraints={
//     mq.isDesktop
//       ? new BoxConstraints({ maxWidth: 600 })
//       : undefined
//   }

//   decoration={
//     new BoxDecoration({
//       color: "#0818A8",
//       shape: BoxShape.rectangle,
//       borderRadius: BorderRadius.circular(
//         mq.isMobile ? 12 : 20
//       ),
//       boxShadow: mq.isMobile
//         ? []
//         : [
//             new BoxShadow({
//               color: "hsla(0, 0%, 0%, 0.30)",
//               blurRadius: 8,
//               offset: new Offset(0, 4),
//             }),
//           ],
//     })
//   }
// >
//   <BaseColumn
//     mainAxisAlignment={MainAxisAlignment.center}
//     crossAxisAlignment={CrossAxisAlignment.center}
//     mainAxisSize={MainAxisSize.min}
//   >
//     <BaseText
//       overflow={TextOverflow.ellipsis}
//       maxLines={1}
//       style={
//         new TextStyle({
//           fontSize: mq.isMobile ? 12 : 16,
//           fontWeight: FontWeight.bold,
//           color: "#eaeaeaff",
//         })
//       }
//     >
//       Ini container
//     </BaseText>
//   </BaseColumn>
// </BaseContainer>
