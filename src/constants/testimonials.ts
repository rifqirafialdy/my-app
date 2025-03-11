type Testimoni ={
    name : string;
    position : string;
    workplace: string;
    testimoni:string;
    pic:string;
}
const DUMMY_TESTIMONI:Testimoni[]=[
    {
        name : "Ayush Raj",
        position : "VP of Marketing",
        workplace: "Webflow",
        testimoni:"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” ",
        pic:"/Ayush Raj.png", 
    },
    {
        name : "Alex Cattoni",
        position : "Founder",
        workplace: "CopyPossy",
        testimoni:"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” ",
        pic:"/Alex Cattoni.png", 
    }
]
export {DUMMY_TESTIMONI};