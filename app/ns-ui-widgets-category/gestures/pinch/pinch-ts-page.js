"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onPinch(args) {
    console.log("scale: " + args.scale);
    console.log("tate: " + args.state);
    console.log("getFocusX(): " + args.getFocusX());
    console.log("getFocusY(): " + args.getFocusY());
}
exports.onPinch = onPinch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluY2gtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpbmNoLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxpQkFBd0IsSUFBMkI7SUFFL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLElBQUksQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLElBQUksQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFORCwwQkFNQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGdlc3QtcGluY2gtdHNcbmltcG9ydCB7IFBpbmNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblBpbmNoKGFyZ3M6IFBpbmNoR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIC8vIGFyZ3MgaXMgb2YgdHlwZSBQaW5jaEdlc3R1cmVFdmVudERhdGFcbiAgICBjb25zb2xlLmxvZyhgc2NhbGU6ICR7YXJncy5zY2FsZX1gKTtcbiAgICBjb25zb2xlLmxvZyhgdGF0ZTogJHthcmdzLnN0YXRlfWApO1xuICAgIGNvbnNvbGUubG9nKGBnZXRGb2N1c1goKTogJHthcmdzLmdldEZvY3VzWCgpfWApO1xuICAgIGNvbnNvbGUubG9nKGBnZXRGb2N1c1koKTogJHthcmdzLmdldEZvY3VzWSgpfWApO1xufVxuLy8gPDwgZ2VzdC1waW5jaC10c1xuIl19