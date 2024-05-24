import { formatIsoString } from "@/app/lib/datestr-format";

const Footer = ({ datetime }: { datetime: string }) => {
  const formatted = formatIsoString(datetime)
  return (
    <footer>
      <div>
        <p>Last Updated: {formatted}</p>
      </div>
    </footer>
  )
}

export default Footer;