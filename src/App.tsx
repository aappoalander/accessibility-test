import React, { useState } from "react";
import {
    Listbox,
    ListboxOption,
    ListboxInput,
    ListboxButton,
    ListboxPopover,
    ListboxList
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import "./App.css";
import { useId } from "@reach/auto-id";

function BasicExample() {
    let labelId = `taco-label--${useId()}`;
    return (
        <div>
            <VisuallyHidden id={labelId}>Choose a taco</VisuallyHidden>
            <Listbox aria-labelledby={labelId}>
                <ListboxOption value="default">Choose a taco</ListboxOption>
                <ListboxOption value="asada">Carne Asada</ListboxOption>
                <ListboxOption value="pollo" label="Pollo" disabled>
                    Pollo <Tag>Sold Out!</Tag>
                </ListboxOption>
                <div style={{ background: "#ccc" }}>
                    <ListboxOption value="pastor" label="Pastor">
                        Pastor <Tag>Fan favorite!</Tag>
                    </ListboxOption>
                </div>
                <ListboxOption value="lengua">Lengua</ListboxOption>
            </Listbox>
        </div>
    );
}

function Tag(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    >
) {
    return (
        <span
            style={{
                display: "inline-block",
                lineHeight: 1,
                fontSize: 11,
                textTransform: "uppercase",
                fontWeight: "bolder",
                marginLeft: 6,
                padding: 4,
                background: "crimson",
                borderRadius: 2,
                color: "#fff"
            }}
            {...props}
        />
    );
}

function ComposedExample() {
    let labelId = `taco-label--${useId()}`;
    let [value, setValue] = useState("pollo");
    return (
        <div>
            <VisuallyHidden id={labelId}>Choose a taco</VisuallyHidden>
            <ListboxInput
                aria-labelledby={labelId}
                value={value}
                onChange={value => setValue(value)}
            >
                <ListboxButton arrow="▼" />
                <ListboxPopover>
                    <ListboxList>
                        <ListboxOption value="default">
                            Choose a taco
                        </ListboxOption>
                        <ListboxOption value="asada">Carne Asada</ListboxOption>
                        <ListboxOption value="pollo">Pollo</ListboxOption>
                        <ListboxOption value="pastor">Pastor</ListboxOption>
                        <ListboxOption value="lengua">Lengua</ListboxOption>
                    </ListboxList>
                    <div
                        style={{
                            padding: "10px 10px 0",
                            marginTop: 10,
                            borderTop: "1px solid gray"
                        }}
                    >
                        <p>
                            I really like tacos. I hope you enjoy them as well!
                        </p>
                    </div>
                </ListboxPopover>
            </ListboxInput>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Test for Reach-UI ListBox</h1>
            </header>
            <main>
                <p>
                    This simple site is for testing accessibility of
                    ui-components
                </p>
                <h2>Listbox basic example</h2>
                <BasicExample />
                <p>
                    Lorem ipsum dolor sit amet, cu mei dico scaevola disputando.
                    Ne dicta eirmod elaboraret nam, mel eros doming eripuit ex.
                    Ad sed nisl fuisset. Sit timeam tractatos ei. Nibh posse
                    abhorreant te ius, per at iudico abhorreant. Id quo harum
                    lobortis, aperiri persius ne vim. Mei ne tempor saperet, pri
                    voluptaria sadipscing an. Nominati forensibus scribentur mel
                    ea. Ius id probatus constituam complectitur. Sea augue
                    voluptua ex, vim ex vituperata inciderint, pri malorum
                    sententiae ei. Eu duo noster doctus contentiones. Tale
                    scripta civibus sea ne. Sit eros detraxit ne, ei mutat
                    nusquam sit, magna prodesset no sed. Duis omnes vim ad, nam
                    at augue liber mediocritatem. Cetero volutpat quo in, cu eam
                    disputando comprehensam. Nec dictas diceret te, te quem
                    contentiones mediocritatem duo. His everti tritani
                    persequeris eu, id placerat delicata hendrerit vis. Eam
                    nobis periculis similique et, probo velit ne vim, postulant
                    efficiantur intellegebat te eos. Regione persequeris et duo,
                    eu est tollit tacimates disputando. Fabulas facilisi
                    pertinax ea nam. Ut nulla perpetua vituperatoribus pri.
                    Modus oratio mel cu, cu putent argumentum accommodare vis,
                    ancillae mentitum eam te. Tation tibique scriptorem vix cu,
                    verear omnesque pro eu. Cu mucius expetenda nec, ei nulla
                    adipisci deseruisse has. Habeo malorum pericula in eam,
                    exerci altera iudicabit id quo. Ex wisi fugit qui. Dolore
                    aliquip tractatos ius te. Pri eu mundi eripuit comprehensam.
                    Ius salutandi mediocritatem ne, sed labitur deleniti
                    pertinacia eu. Ea impedit mandamus iracundia qui. Nam ad
                    suas ipsum nostro, primis tacimates in mel. Dolor partem
                    meliore ne nec. Ad quidam blandit tractatos sit. Quo novum
                    sadipscing ex, id qui decore adipiscing. Mei te nisl
                    erroribus contentiones, ut diceret alienum oporteat qui. At
                    vix minimum vivendum, vis purto habemus suavitate et. Ut
                    quis conceptam vis, brute assueverit sadipscing et vel. Ex
                    eum volumus suavitate, eu duo quaeque legimus. Debet aperiam
                    dissentiet ei vis, qui cu malis fabulas vivendo. Ancillae
                    referrentur ei sed, placerat scripserit at quo, ius id nobis
                    laudem aliquam. Dictas utroque at usu. At suas atomorum
                    inciderint cum, ne has duis ignota inimicus, id tractatos
                    consulatu ius. Quo te graece tamquam, augue pertinax est cu,
                    fabellas atomorum vix ea. An possim nostrum qui, tractatos
                    conceptam qui ex. Pri et sale quas. Impetus repudiare
                    adolescens his ne, vim te iracundia forensibus, alia paulo
                    eum an. Cum dolorem indoctum cu. Pri no malis vivendo
                    argumentum, officiis volutpat signiferumque est in, in sit
                    brute volumus. Ut mutat menandri percipitur ius, dolore
                    incorrupte vix ea. Omittantur concludaturque in vim, in
                    doming efficiendi qui. Qui eu duis quodsi splendide,
                    prodesset pertinacia voluptaria ei sea. Nec an nominavi
                    suscipit deseruisse.
                </p>
                <h2>ComposedExample</h2>
                <ComposedExample />
                <p>
                    Lorem ipsum dolor sit amet, cu mei dico scaevola disputando.
                    Ne dicta eirmod elaboraret nam, mel eros doming eripuit ex.
                    Ad sed nisl fuisset. Sit timeam tractatos ei. Nibh posse
                    abhorreant te ius, per at iudico abhorreant. Id quo harum
                    lobortis, aperiri persius ne vim. Mei ne tempor saperet, pri
                    voluptaria sadipscing an. Nominati forensibus scribentur mel
                    ea. Ius id probatus constituam complectitur. Sea augue
                    voluptua ex, vim ex vituperata inciderint, pri malorum
                    sententiae ei. Eu duo noster doctus contentiones. Tale
                    scripta civibus sea ne. Sit eros detraxit ne, ei mutat
                    nusquam sit, magna prodesset no sed. Duis omnes vim ad, nam
                    at augue liber mediocritatem. Cetero volutpat quo in, cu eam
                    disputando comprehensam. Nec dictas diceret te, te quem
                    contentiones mediocritatem duo. His everti tritani
                    persequeris eu, id placerat delicata hendrerit vis. Eam
                    nobis periculis similique et, probo velit ne vim, postulant
                    efficiantur intellegebat te eos. Regione persequeris et duo,
                    eu est tollit tacimates disputando. Fabulas facilisi
                    pertinax ea nam. Ut nulla perpetua vituperatoribus pri.
                    Modus oratio mel cu, cu putent argumentum accommodare vis,
                    ancillae mentitum eam te. Tation tibique scriptorem vix cu,
                    verear omnesque pro eu. Cu mucius expetenda nec, ei nulla
                    adipisci deseruisse has. Habeo malorum pericula in eam,
                    exerci altera iudicabit id quo. Ex wisi fugit qui. Dolore
                    aliquip tractatos ius te. Pri eu mundi eripuit comprehensam.
                    Ius salutandi mediocritatem ne, sed labitur deleniti
                    pertinacia eu. Ea impedit mandamus iracundia qui. Nam ad
                    suas ipsum nostro, primis tacimates in mel. Dolor partem
                    meliore ne nec. Ad quidam blandit tractatos sit. Quo novum
                    sadipscing ex, id qui decore adipiscing. Mei te nisl
                    erroribus contentiones, ut diceret alienum oporteat qui. At
                    vix minimum vivendum, vis purto habemus suavitate et. Ut
                    quis conceptam vis, brute assueverit sadipscing et vel. Ex
                    eum volumus suavitate, eu duo quaeque legimus. Debet aperiam
                    dissentiet ei vis, qui cu malis fabulas vivendo. Ancillae
                    referrentur ei sed, placerat scripserit at quo, ius id nobis
                    laudem aliquam. Dictas utroque at usu. At suas atomorum
                    inciderint cum, ne has duis ignota inimicus, id tractatos
                    consulatu ius. Quo te graece tamquam, augue pertinax est cu,
                    fabellas atomorum vix ea. An possim nostrum qui, tractatos
                    conceptam qui ex. Pri et sale quas. Impetus repudiare
                    adolescens his ne, vim te iracundia forensibus, alia paulo
                    eum an. Cum dolorem indoctum cu. Pri no malis vivendo
                    argumentum, officiis volutpat signiferumque est in, in sit
                    brute volumus. Ut mutat menandri percipitur ius, dolore
                    incorrupte vix ea. Omittantur concludaturque in vim, in
                    doming efficiendi qui. Qui eu duis quodsi splendide,
                    prodesset pertinacia voluptaria ei sea. Nec an nominavi
                    suscipit deseruisse.
                </p>
                <h2>Test heading after composed exmple</h2>
                <p>
                    Lorem ipsum dolor sit amet, cu mei dico scaevola disputando.
                    Ne dicta eirmod elaboraret nam, mel eros doming eripuit ex.
                    Ad sed nisl fuisset. Sit timeam tractatos ei. Nibh posse
                    abhorreant te ius, per at iudico abhorreant. Id quo harum
                    lobortis, aperiri persius ne vim. Mei ne tempor saperet, pri
                    voluptaria sadipscing an. Nominati forensibus scribentur mel
                    ea. Ius id probatus constituam complectitur. Sea augue
                    voluptua ex, vim ex vituperata inciderint, pri malorum
                    sententiae ei. Eu duo noster doctus contentiones. Tale
                    scripta civibus sea ne. Sit eros detraxit ne, ei mutat
                    nusquam sit, magna prodesset no sed. Duis omnes vim ad, nam
                    at augue liber mediocritatem. Cetero volutpat quo in, cu eam
                    disputando comprehensam. Nec dictas diceret te, te quem
                    contentiones mediocritatem duo. His everti tritani
                    persequeris eu, id placerat delicata hendrerit vis. Eam
                    nobis periculis similique et, probo velit ne vim, postulant
                    efficiantur intellegebat te eos. Regione persequeris et duo,
                    eu est tollit tacimates disputando. Fabulas facilisi
                    pertinax ea nam. Ut nulla perpetua vituperatoribus pri.
                    Modus oratio mel cu, cu putent argumentum accommodare vis,
                    ancillae mentitum eam te. Tation tibique scriptorem vix cu,
                    verear omnesque pro eu. Cu mucius expetenda nec, ei nulla
                    adipisci deseruisse has. Habeo malorum pericula in eam,
                    exerci altera iudicabit id quo. Ex wisi fugit qui. Dolore
                    aliquip tractatos ius te. Pri eu mundi eripuit comprehensam.
                    Ius salutandi mediocritatem ne, sed labitur deleniti
                    pertinacia eu. Ea impedit mandamus iracundia qui. Nam ad
                    suas ipsum nostro, primis tacimates in mel. Dolor partem
                    meliore ne nec. Ad quidam blandit tractatos sit. Quo novum
                    sadipscing ex, id qui decore adipiscing. Mei te nisl
                    erroribus contentiones, ut diceret alienum oporteat qui. At
                    vix minimum vivendum, vis purto habemus suavitate et. Ut
                    quis conceptam vis, brute assueverit sadipscing et vel. Ex
                    eum volumus suavitate, eu duo quaeque legimus. Debet aperiam
                    dissentiet ei vis, qui cu malis fabulas vivendo. Ancillae
                    referrentur ei sed, placerat scripserit at quo, ius id nobis
                    laudem aliquam. Dictas utroque at usu. At suas atomorum
                    inciderint cum, ne has duis ignota inimicus, id tractatos
                    consulatu ius. Quo te graece tamquam, augue pertinax est cu,
                    fabellas atomorum vix ea. An possim nostrum qui, tractatos
                    conceptam qui ex. Pri et sale quas. Impetus repudiare
                    adolescens his ne, vim te iracundia forensibus, alia paulo
                    eum an. Cum dolorem indoctum cu. Pri no malis vivendo
                    argumentum, officiis volutpat signiferumque est in, in sit
                    brute volumus. Ut mutat menandri percipitur ius, dolore
                    incorrupte vix ea. Omittantur concludaturque in vim, in
                    doming efficiendi qui. Qui eu duis quodsi splendide,
                    prodesset pertinacia voluptaria ei sea. Nec an nominavi
                    suscipit deseruisse.
                </p>
            </main>
        </div>
    );
}

export default App;
