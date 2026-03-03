import { Mail, Phone } from 'lucide-react';

export interface TeamMember {
  name: string;
  qualification: string;
  experience: string;
  email: string;
  phone: string;
  image: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group bg-card rounded-xl shadow-sm hover-lift p-6 text-center transition-all duration-300">
      {/* Round Image */}
      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gold/30 group-hover:border-gold transition-colors duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Name & Details */}
      <h3 className="font-display text-lg font-bold text-navy mb-1">{member.name}</h3>
      <p className="text-sm text-gold font-medium mb-1">{member.qualification}</p>
      <p className="text-xs text-muted-foreground mb-4">{member.experience} of experience</p>

      {/* Contact Icons */}
      <div className="flex items-center justify-center gap-3">
        <a
          href={`mailto:${member.email}`}
          className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center hover:bg-navy hover:text-primary-foreground transition-all duration-300"
          title={member.email}
        >
          <Mail size={15} />
        </a>
        <a
          href={`tel:${member.phone}`}
          className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center hover:bg-navy hover:text-primary-foreground transition-all duration-300"
          title={member.phone}
        >
          <Phone size={15} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
