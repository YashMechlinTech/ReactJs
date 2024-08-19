import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all"; //imported as plugin
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const ScrollTrig = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        rotation: 360,
        x: 150 * (boxes.indexOf(box) + 5),
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          ease: "power1.inOut",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit quae
      quas assumenda eaque iste saepe aliquid. Tempora eveniet impedit aperiam
      provident, autem tenetur praesentium est delectus fugiat. Id mollitia illo
      obcaecati sunt possimus, porro in, suscipit voluptatibus voluptatum
      dignissimos nulla aspernatur, eum labore voluptate? Officia omnis optio
      nam impedit rem cupiditate quod non cumque ipsum quidem beatae distinctio
      ipsam et natus ducimus pariatur maiores voluptatum, labore ratione.
      Quaerat eius cum dolore repellat cumque explicabo, similique quo
      voluptatum molestias aut eum non neque facilis consequuntur placeat unde,
      nulla debitis consectetur. Suscipit id numquam qui optio assumenda
      repellendus natus quos eligendi mollitia veritatis! Harum reiciendis quas,
      aperiam modi, nihil corrupti praesentium veritatis voluptatibus voluptas
      magni sit nisi iure ratione error, dignissimos nam? Obcaecati facilis
      pariatur deleniti veniam. Illum necessitatibus repudiandae doloribus
      facere esse quo quidem earum iure voluptatibus atque aliquid fugiat
      praesentium quia laboriosam porro repellat nobis, omnis, commodi
      perspiciatis! Ducimus ullam quo exercitationem culpa quam voluptatibus,
      hic veniam sed porro tenetur placeat. Optio cumque deleniti eos iste
      ducimus accusantium? Quia illo possimus dolores magnam ad voluptate quae
      corrupti reprehenderit dolorum numquam et sapiente neque odit eligendi,
      molestiae, non tenetur vitae! Modi porro, a temporibus aut veniam dolorum
      fuga ducimus nulla quo, corrupti, in quidem labore rerum ad. Eligendi
      quibusdam vero architecto repudiandae doloremque dolorum quos rem sequi
      impedit, incidunt libero distinctio delectus corporis, exercitationem
      aspernatur molestiae iusto quod pariatur nam, non perferendis quo fuga
      temporibus iure! Cupiditate voluptas sapiente eos impedit excepturi ipsam,
      incidunt enim! Sint veritatis magnam placeat iusto, voluptatem soluta
      nostrum consectetur deleniti. Quod enim reiciendis fuga sequi similique
      quia asperiores consequatur rem magnam eaque dicta iure quaerat ratione,
      quam maiores a eligendi incidunt adipisci nobis maxime error! Cum maiores
      eos aperiam, totam odio pariatur atque ex, adipisci cumque est suscipit,
      eius voluptate! Dignissimos optio iste, perferendis qui eveniet molestias
      unde veniam, explicabo nemo quaerat quos, molestiae beatae dicta eaque?
      Amet illum nulla repellendus ipsum quod totam laborum esse est soluta
      perferendis necessitatibus, atque placeat cupiditate nostrum culpa. Alias
      accusamus explicabo labore ducimus placeat, quae, enim facilis omnis vel
      id consectetur! Vero iusto dolores nihil. Numquam atque explicabo deserunt
      perspiciatis ipsa error nihil pariatur doloremque at officiis eius, animi
      accusantium dolorem fuga necessitatibus ullam rerum est fugit! Et officia
      explicabo ab temporibus dolore architecto laboriosam quibusdam cupiditate
      ipsum distinctio sapiente veniam fugiat magnam totam eaque minus quos,
      minima dolores quisquam expedita. Dolore necessitatibus repellendus,
      aperiam aliquid perferendis quae, qui expedita excepturi nesciunt omnis
      corrupti culpa quod! Aliquid quos quo reiciendis tempora repellat
      officiis, natus ad, velit commodi qui, eaque nulla quisquam? Consectetur,
      totam nobis neque a consequuntur soluta numquam voluptatem! Inventore
      culpa pariatur, itaque maxime dolorum ipsam unde doloremque ab non quia,
      sequi numquam soluta sit recusandae dolor possimus, quae aspernatur
      nostrum? Nam voluptatum facere ullam ipsa nobis, porro veritatis
      accusantium minus delectus similique, quaerat tempora tenetur debitis quae
      doloribus est, a totam dicta. Veniam amet at odio libero, nobis aspernatur
      veritatis culpa aperiam sapiente ducimus repellendus molestiae. Optio
      aperiam exercitationem fuga nihil laboriosam rerum iure adipisci
      reiciendis necessitatibus vitae, perspiciatis delectus pariatur error sit
      voluptates dolores dicta dignissimos iste ut consequatur blanditiis!
      Maxime iste dolorem atque reprehenderit ipsum sequi explicabo. Animi
      provident doloremque magnam, temporibus laborum aspernatur tenetur nisi
      incidunt quo repellat. Eaque suscipit deleniti porro quia delectus numquam
      veniam explicabo laudantium minus quos, nihil expedita doloremque, vel
      reiciendis ullam earum! At accusantium veritatis adipisci consequatur aut
      quam odit quasi ut consequuntur illum culpa, voluptas exercitationem quod
      quidem minus pariatur ab fugiat id obcaecati ea tenetur dolor? Illo beatae
      doloribus numquam, rerum esse exercitationem accusantium consectetur.
      Aperiam, modi alias dignissimos iste repellendus tempore harum, dolore
      consequuntur beatae laboriosam numquam repudiandae et facere doloremque
      ab, ipsam pariatur quos. Culpa dolorum, porro quasi corporis voluptatem
      quas doloribus nisi cupiditate aliquam libero asperiores, ut itaque vel
      aperiam maiores laudantium incidunt magnam minus hic nam labore ad unde
      voluptas. Et blanditiis iure voluptate veniam soluta repudiandae, aperiam
      nam nisi itaque ab maxime laudantium minima, eum ullam eligendi atque
      laborum commodi nihil placeat. Ex voluptates aut at culpa totam ipsum
      ducimus eligendi, laudantium alias animi ipsam quod nam facere corporis
      suscipit mollitia provident eos dolores! Quibusdam ad at reprehenderit
      quas qui nihil voluptas! Voluptatum dolore praesentium nesciunt aliquam
      ratione, earum ex nisi illo, tempore porro pariatur eum beatae ipsa optio
      dignissimos harum ut consequatur amet vel maiores nihil a ad? Facere
      aliquid, quibusdam perferendis minus facilis delectus ratione itaque, sint
      amet modi quidem repellat dolor quam corrupti beatae, incidunt iste
      praesentium exercitationem possimus? Facilis ad officiis tempora optio
      debitis aperiam odio, recusandae non natus error iste et alias, quasi
      soluta voluptate id deserunt reprehenderit necessitatibus dolore ut quod
      sunt veniam. Aliquid, maiores soluta tempore at explicabo laboriosam
      quibusdam, sequi in, architecto eum error deleniti exercitationem
      blanditiis eligendi nesciunt? Officia non similique vel reprehenderit
      consectetur reiciendis exercitationem perspiciatis quas dolor. Aliquam
      esse maxime magni inventore impedit molestias dolores qui, laudantium rem
      doloremque optio architecto corporis error, aut, facere cupiditate fugiat
      natus corrupti a delectus sed iusto. Cupiditate earum quod, aliquam,
      recusandae assumenda corrupti a est maxime laboriosam veniam libero
      corporis ipsa autem molestias facilis! Hic sunt, aspernatur delectus esse
      cum accusantium illo aliquid natus molestias harum iusto nostrum ex
      corporis minus at consectetur? Saepe voluptate placeat at laboriosam fuga
      doloribus, quasi voluptates quaerat iusto possimus neque. Libero facilis
      iste sed a illo rem saepe esse optio repudiandae asperiores earum ducimus
      voluptate debitis consectetur ratione labore corporis, quos obcaecati
      accusamus. Veritatis maiores, eos eaque quidem ab quis sapiente quod non
      earum dignissimos, voluptatum beatae provident mollitia aliquid,
      recusandae iure expedita. Assumenda exercitationem molestias possimus
      repellendus amet quasi atque iure ipsam placeat, ut veritatis maiores sed
      veniam ratione tempore sapiente. Quia nihil consequuntur aut ad pariatur
      obcaecati reiciendis cumque nemo officiis fuga? Enim tempora animi facilis
      officia itaque, delectus ipsum necessitatibus et pariatur, repellat vel
      dolores nam odio vero, cumque eos quas. Dolorum at eveniet reiciendis
      aliquam voluptatem consectetur impedit animi. Quibusdam quae, officia
      voluptatum voluptate quia sequi nobis eaque! Excepturi blanditiis, quidem
      architecto incidunt culpa animi aliquid, beatae eveniet commodi, sed ex
      ab? Maiores?
      <div className="boxes" ref={scrollRef}>
        <div className="circle"></div>

        <div className="circle"></div>
      </div>
    </>
  );
};

export default ScrollTrig;
