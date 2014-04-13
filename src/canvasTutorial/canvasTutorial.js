// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  ImBcmDth - Jon-Carlos Rivera.  Updated by Scott Sanbar

function draw() {
    clear();
    circle(x, y, 10);

    if (x + dx > WIDTH || x + dx < 0) {
        s = ddx < 0 ? -1 : 1;
        if (dx === MAXDX) {
            dx = -MAXDX;
        } else if (dx === -MAXDX) {
            dx = MAXDX;
        } else {
            dx = -dx;
            ddx = -ddx;
        }
        dx += ddx;
        if (!dx) {
            dx += ddx;
        }
    }

    if (y + dy > HEIGHT || y + dy < 0) {
        if (dy === MAXDY) {
            dy = -MAXDY;
        } else if (dx === -MAXDY) {
            dy = MAXDY;
        } else {
            dy = -dy;
            ddy = -ddy;
        }
        dy += ddy;
        if (!dy) {
            dy += ddy;
        }
    }

/*    if (x + dx > WIDTH || x + dx < 0) {
        dx = -dx;
        sx = ddx < 0 ? -1 : 1;
        if (dx > WIDTH || dx < -WIDTH) {
            ddx = -ddx;
        } else if (dx === 0) {
            dx += sx < 0 ? -1 : 1;
        }
    }
    if (y + dy > HEIGHT || y + dy < 0) {
        dy = -dy;
        sy = ddy < 0 ? -1 : 1;
        dy += dy < 0 ? -ddy : ddy;
        if (dy > HEIGHT || dy < -HEIGHT) {
            ddy = -ddy;
        } else if (dy === 0) {
            dy += sy < 0 ? -1 : 1;
        }
    }
*/
    x += dx;
    y += dy;
}

init();