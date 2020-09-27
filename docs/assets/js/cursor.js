// custom cursor template https://codepen.io/jing-han/pen/KErBWY
class CustomCursor {
    constructor(cursor, target) {
        this.cursor = cursor;
        // alert(this.cursor);
        this.circle = this.cursor.querySelector('.circle');
        this.text = this.cursor.querySelector('.text');
        this.target = target;
        this.state = {
            isDown: false
        }
    }
    getBounds() {
        const { width, height } = this.cursor.getBoundingClientRect();
        return { width, height };
    }
    init() {
        this.initEvents();
    }
    initEvents() {
        this.target.addEventListener('mousedown', e => this.mouseDown(e));
        this.target.addEventListener('mouseup', e => this.mouseUp(e));
        this.target.addEventListener('mousemove', e => this.mouseMove(e));
    }
    handleProgress() {

    }
    mouseDown(e) {
        this.state.isDown = true;
        TweenMax.to(this.cursor, .5, {
            transformOrigin: 'center',
            scale: .3
        });
        TweenMax.to(this.circle, .3, {
            scale: 1
        });
        TweenMax.to(this.text, .5, {
            autoAlpha: 0
        })

    }
    mouseUp() {
        this.state.isDown = false;

        // animate
        TweenMax.to(this.cursor, 1, {
            scale: 1,
            ease: Elastic.easeInOut
        });
        TweenMax.to(this.circle, .3, {
            scale: 0
        });
        TweenMax.to(this.text, .5, {
            autoAlpha: 1
        })
    }
    mouseMove(e) {
        const { clientX, clientY } = e;
        const { width, height } = this.getBounds();

        TweenMax.to(this.cursor, .1, {
            x: clientX - width / 2,
            y: clientY - height / 2
        })

    }

}

function cursorAnimationController() {
    const cursor = document.querySelector('.cursor');
    const custom = new CustomCursor(cursor, window);

    custom.init();
}