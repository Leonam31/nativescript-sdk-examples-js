// >> gest-pan
function onPan(args) {
    // args is of type PanGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log(`deltaX: ${args.deltaX}`);
    console.log(`deltaY: ${args.deltaY}`);
    console.log(`state: ${args.state}`);
}
exports.onPan = onPan;
// << gest-pan
