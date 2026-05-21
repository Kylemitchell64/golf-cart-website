export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <iframe
        title="Golf Cart Specialists Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-84.98!3d32.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI4JzQ4LjAiTiA4NMKwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
