// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus 13T",
			image: "/images/device/oneplus13t.png",
			specs: "Gray / 16G + 1TB",
			description:
				"Flagship performance, Hasselblad imaging, 80W SuperVOOC.",
			link: "https://www.oneplus.com/cn/13t",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.png",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
	Xiaomi: [
		{
			name: "Redmi 5 Plus",
			specs: "Rose / 4G + 64GB",
			description:
				"骁龙625一代神u，刷机小王子，我的成色战损（除屏幕以外），摄像一般，刷入alphadroid安卓13退休中。",
		},
  {
			name: "Black Shark",
			specs: "Black / 8G + 128GB",
			description:
				"骁龙845一代神u，但刷机包极少，不如隔壁的mix2s，我的成色还可以，摄像一般，刷入lineage安卓15主力中。",
		},
  {
			name: "Xiaomi Pad 4 Plus",
			specs: "Black / 4G + 64GB",
			description:
				"骁龙845一代神u，刷机包挺多，我的成色还可以，摄像一般（Pad不需要摄像），刷入crdroid安卓13养老中。",
		},
  {
			name: "Xiaomi CC9 Pro",
			specs: "Blue / 8G + 256GB",
			description:
				"骁龙730G一代烂u，未解bootloader，性能不如黑鲨，但是摄像神了，小米首发一亿像素，放到今天依旧能打，只不过芯片孱弱，拍张照都得处理一段时间，我的成色还可以，吃灰中。",
		},
  {
			name: "Xiaomi Smart Band 9 Pro",
			specs: "Black / 256MB",
			description:
				"当初499原价买的，现在感觉有点亏了，不过确实是好用的。屏幕四边等宽观感很舒服，表盘和快应用很多，计算器电子书工具箱小游戏等等比较实用，重量质感这一块都还可以。",
		},
	],
};
