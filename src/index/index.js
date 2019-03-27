import './index.scss';
class Lighter {
    constructor () {
        this.lights = ["red", "yellow", "green"];
        this.activeIndex = 1;
        this.btn = document.createElement("button");
        this.isEnable = false;
        this.lamps = [];
        this.init();
    }

    createLighter() {
        let lighter = document.querySelector(".lighter");

        for (let i = 0; i <= 2; i++) {
            let light = document.createElement("div");
            this.lamps[i] = light;
            light.classList.add("light");
            light.classList.add(this.lights[i]);

            light.addEventListener("click", () => {
                if (this.isEnable === true) {
                    light.classList.toggle("on")
                }
            });

            lighter.appendChild(light);
        }

        this.btn.classList.add("btn");
        this.btn.textContent = "off";
        lighter.appendChild(this.btn);
    }

    attachEvent() {
        this.btn.addEventListener("click", () => {
            if (this.isEnable === false) {
                this.on();
            } else {
                this.off();
                this.lamps.forEach((lamp) => {
                    lamp.classList.remove("on");
                })
            }
        })
    }

    on() {
        this.btn.classList.remove("off");
        this.btn.classList.add("on");
        this.btn.textContent = "on";
        this.isEnable = true;
    }
    off() {
        this.btn.classList.remove("on");
        this.btn.classList.add("off");
        this.btn.textContent = "off";
        this.isEnable = false;
    }
    init() {
        this.createLighter();
        this.attachEvent();
    }



}

const firstLighter = new Lighter();

