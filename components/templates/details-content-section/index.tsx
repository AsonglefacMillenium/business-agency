import { DetailsContent } from "@/components/molecules";
import React from "react";

const DetailsContentSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-[100px]">
      <div className="w-[70%] flex flex-col flex-wrap gap-[24px]">
        <DetailsContent
          title="01. The Challenge"
          text1="When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
          text2=""
        />
        <DetailsContent
          title="02. The Solution "
          text1="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          text2="One who avoids a pain that produces no resultant pleasure.
          laborious physical exercise.
          One who avoids a pain that produces no resultant
          which of us ever undertakes laborious
          Avoids pleasure itself, because it is."
        />
        <DetailsContent
          title="03. The Result"
          text1="Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          text2="When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.      "
        />
      </div>
    </div>
  );
};

export default DetailsContentSection;
