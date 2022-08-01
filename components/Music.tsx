import useSWR from "swr";
import ExtLink from "./ExtLink";
import { SWRResponse } from "swr";

interface SongData {
  title: string;
  artist: string;
  url: string;
  listening: boolean;
}

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const Music = () => {
  const { data, error }: SWRResponse<SongData, Error> = useSWR(
    "/api/music",
    fetcher
  );

  if (error || !data || !data.listening) return null;

  return (
    <p>
      I&#39;m currently listening to{" "}
      <ExtLink href={data.url}>
        {data.title} by {data.artist}
      </ExtLink>
      <style jsx>{`
        p {
          opacity: 0.5;
        }
      `}</style>
    </p>
  );
};

export default Music;
