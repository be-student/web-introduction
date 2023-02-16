import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Avatar } from "@mui/material";
import NavigationBar from "@/component/navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "70vh",
              width: "100%",
            }}
          >
            <Avatar
              sx={{ width: 200, height: 200 }}
              src="http://cdn.gameple.co.kr/news/photo/201808/143268_148811_258.png"
            />
            <div
              style={{
                width: "100%",
                paddingLeft: "10rem",
                paddingRight: "10rem",
              }}
            >
              <h1 style={{ marginTop: "20px", fontSize: "25px" }}>
                닉네임 : 누누
              </h1>
              <h2>사는 곳 : 종로구 혜화동</h2>
              <h2>About me </h2>
              <Link href="https://github.com/be-student">
                <img
                  style={{ width: "30px", height: "30px" }}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                ></img>
              </Link>

              <h2 style={{ marginBottom: "20px" }}>소개글</h2>
              <div style={{ fontSize: "16px" }}>
                안녕하세요 현재 우아한 테크코스 5기 백엔드 크루로 활동하고 있는
                누누라고 합니다
              </div>
            </div>
          </div>
          <NavigationBar />
        </div>
      </main>
    </>
  );
}
