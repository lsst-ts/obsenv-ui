const Footer = ({ datetime }: { datetime: string }) => {
  return (
    <footer>
      <div>
        <p>Last Updated: {datetime}</p>
      </div>
    </footer>
  )
}

export default Footer;