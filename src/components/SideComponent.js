import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState } from 'react'
import PDFDocument from './PDFDocument';
import { Typography } from '@mui/material';

const SideComponent = ({ formData, handlecurrency }) => {

    const [currency, setcurrency] = useState("USD");


  return (
    <div>
      <h3> Download Invoice </h3>
      <PDFDownloadLink
        document={<PDFDocument formData={formData} currency={currency} />}
        fileName='Invoice.pdf'
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
      <Typography> Currency </Typography>
      <select
        class='form-select'
        id='currency'
        name='currency'
        style={{ height: "40px" }}
        value={currency}
        onChange={(e) => {
            handlecurrency(e.target.value);
            setcurrency(e.target.value);
        }}
      >
        <option value='AFN'>AFN - Afghan Afghani - ؋</option>
        <option value='ALL'>ALL - Albanian Lek - Lek</option>
        <option value='DZD'>DZD - Algerian Dinar - دج</option>
        <option value='AOA'>AOA - Angolan Kwanza - Kz</option>
        <option value='ARS'>ARS - Argentine Peso - $</option>
        <option value='AMD'>AMD - Armenian Dram - ֏</option>
        <option value='AWG'>AWG - Aruban Florin - ƒ</option>
        <option value='AUD'>AUD - Australian Dollar - $</option>
        <option value='AZN'>AZN - Azerbaijani Manat - m</option>
        <option value='BSD'>BSD - Bahamian Dollar - B$</option>
        <option value='BHD'>BHD - Bahraini Dinar - .د.ب</option>
        <option value='BDT'>BDT - Bangladeshi Taka - ৳</option>
        <option value='BBD'>BBD - Barbadian Dollar - Bds$</option>
        <option value='BYR'>BYR - Belarusian Ruble - Br</option>
        <option value='BEF'>BEF - Belgian Franc - fr</option>
        <option value='BZD'>BZD - Belize Dollar - $</option>
        <option value='BMD'>BMD - Bermudan Dollar - $</option>
        <option value='BTN'>BTN - Bhutanese Ngultrum - Nu.</option>
        <option value='BTC'>BTC - Bitcoin - ฿</option>
        <option value='BOB'>BOB - Bolivian Boliviano - Bs.</option>
        <option value='BAM'>
          BAM - Bosnia-Herzegovina Convertible Mark - KM
        </option>
        <option value='BWP'>BWP - Botswanan Pula - P</option>
        <option value='BRL'>BRL - Brazilian Real - R$</option>
        <option value='GBP'>GBP - British Pound Sterling - £</option>
        <option value='BND'>BND - Brunei Dollar - B$</option>
        <option value='BGN'>BGN - Bulgarian Lev - Лв.</option>
        <option value='BIF'>BIF - Burundian Franc - FBu</option>
        <option value='KHR'>KHR - Cambodian Riel - KHR</option>
        <option value='CAD'>CAD - Canadian Dollar - $</option>
        <option value='CVE'>CVE - Cape Verdean Escudo - $</option>
        <option value='KYD'>KYD - Cayman Islands Dollar - $</option>
        <option value='XOF'>XOF - CFA Franc BCEAO - CFA</option>
        <option value='XAF'>XAF - CFA Franc BEAC - FCFA</option>
        <option value='XPF'>XPF - CFP Franc - ₣</option>
        <option value='CLP'>CLP - Chilean Peso - $</option>
        <option value='CNY'>CNY - Chinese Yuan - ¥</option>
        <option value='COP'>COP - Colombian Peso - $</option>
        <option value='KMF'>KMF - Comorian Franc - CF</option>
        <option value='CDF'>CDF - Congolese Franc - FC</option>
        <option value='CRC'>CRC - Costa Rican ColÃ³n - ₡</option>
        <option value='HRK'>HRK - Croatian Kuna - kn</option>
        <option value='CUC'>CUC - Cuban Convertible Peso - $, CUC</option>
        <option value='CZK'>CZK - Czech Republic Koruna - Kč</option>
        <option value='DKK'>DKK - Danish Krone - Kr.</option>
        <option value='DJF'>DJF - Djiboutian Franc - Fdj</option>
        <option value='DOP'>DOP - Dominican Peso - $</option>
        <option value='XCD'>XCD - East Caribbean Dollar - $</option>
        <option value='EGP'>EGP - Egyptian Pound - ج.م</option>
        <option value='ERN'>ERN - Eritrean Nakfa - Nfk</option>
        <option value='EEK'>EEK - Estonian Kroon - kr</option>
        <option value='ETB'>ETB - Ethiopian Birr - Nkf</option>
        <option value='EUR'>EUR - Euro - €</option>
        <option value='FKP'>FKP - Falkland Islands Pound - £</option>
        <option value='FJD'>FJD - Fijian Dollar - FJ$</option>
        <option value='GMD'>GMD - Gambian Dalasi - D</option>
        <option value='GEL'>GEL - Georgian Lari - ლ</option>
        <option value='DEM'>DEM - German Mark - DM</option>
        <option value='GHS'>GHS - Ghanaian Cedi - GH₵</option>
        <option value='GIP'>GIP - Gibraltar Pound - £</option>
        <option value='GRD'>GRD - Greek Drachma - ₯, Δρχ, Δρ</option>
        <option value='GTQ'>GTQ - Guatemalan Quetzal - Q</option>
        <option value='GNF'>GNF - Guinean Franc - FG</option>
        <option value='GYD'>GYD - Guyanaese Dollar - $</option>
        <option value='HTG'>HTG - Haitian Gourde - G</option>
        <option value='HNL'>HNL - Honduran Lempira - L</option>
        <option value='HKD'>HKD - Hong Kong Dollar - $</option>
        <option value='HUF'>HUF - Hungarian Forint - Ft</option>
        <option value='ISK'>ISK - Icelandic KrÃ³na - kr</option>
        <option value='INR'>INR - Indian Rupee - ₹</option>
        <option value='IDR'>IDR - Indonesian Rupiah - Rp</option>
        <option value='IRR'>IRR - Iranian Rial - ﷼</option>
        <option value='IQD'>IQD - Iraqi Dinar - د.ع</option>
        <option value='ILS'>ILS - Israeli New Sheqel - ₪</option>
        <option value='ITL'>ITL - Italian Lira - L,£</option>
        <option value='JMD'>JMD - Jamaican Dollar - J$</option>
        <option value='JPY'>JPY - Japanese Yen - ¥</option>
        <option value='JOD'>JOD - Jordanian Dinar - ا.د</option>
        <option value='KZT'>KZT - Kazakhstani Tenge - лв</option>
        <option value='KES'>KES - Kenyan Shilling - KSh</option>
        <option value='KWD'>KWD - Kuwaiti Dinar - ك.د</option>
        <option value='KGS'>KGS - Kyrgystani Som - лв</option>
        <option value='LAK'>LAK - Laotian Kip - ₭</option>
        <option value='LVL'>LVL - Latvian Lats - Ls</option>
        <option value='LBP'>LBP - Lebanese Pound - £</option>
        <option value='LSL'>LSL - Lesotho Loti - L</option>
        <option value='LRD'>LRD - Liberian Dollar - $</option>
        <option value='LYD'>LYD - Libyan Dinar - د.ل</option>
        <option value='LTL'>LTL - Lithuanian Litas - Lt</option>
        <option value='MOP'>MOP - Macanese Pataca - $</option>
        <option value='MKD'>MKD - Macedonian Denar - ден</option>
        <option value='MGA'>MGA - Malagasy Ariary - Ar</option>
        <option value='MWK'>MWK - Malawian Kwacha - MK</option>
        <option value='MYR'>MYR - Malaysian Ringgit - RM</option>
        <option value='MVR'>MVR - Maldivian Rufiyaa - Rf</option>
        <option value='MRO'>MRO - Mauritanian Ouguiya - MRU</option>
        <option value='MUR'>MUR - Mauritian Rupee - ₨</option>
        <option value='MXN'>MXN - Mexican Peso - $</option>
        <option value='MDL'>MDL - Moldovan Leu - L</option>
        <option value='MNT'>MNT - Mongolian Tugrik - ₮</option>
        <option value='MAD'>MAD - Moroccan Dirham - MAD</option>
        <option value='MZM'>MZM - Mozambican Metical - MT</option>
        <option value='MMK'>MMK - Myanmar Kyat - K</option>
        <option value='NAD'>NAD - Namibian Dollar - $</option>
        <option value='NPR'>NPR - Nepalese Rupee - ₨</option>
        <option value='ANG'>ANG - Netherlands Antillean Guilder - ƒ</option>
        <option value='TWD'>TWD - New Taiwan Dollar - $</option>
        <option value='NZD'>NZD - New Zealand Dollar - $</option>
        <option value='NIO'>NIO - Nicaraguan CÃ³rdoba - C$</option>
        <option value='NGN'>NGN - Nigerian Naira - ₦</option>
        <option value='KPW'>KPW - North Korean Won - ₩</option>
        <option value='NOK'>NOK - Norwegian Krone - kr</option>
        <option value='OMR'>OMR - Omani Rial - .ع.ر</option>
        <option value='PKR'>PKR - Pakistani Rupee - ₨</option>
        <option value='PAB'>PAB - Panamanian Balboa - B/.</option>
        <option value='PGK'>PGK - Papua New Guinean Kina - K</option>
        <option value='PYG'>PYG - Paraguayan Guarani - ₲</option>
        <option value='PEN'>PEN - Peruvian Nuevo Sol - S/.</option>
        <option value='PHP'>PHP - Philippine Peso - ₱</option>
        <option value='PLN'>PLN - Polish Zloty - zł</option>
        <option value='QAR'>QAR - Qatari Rial - ق.ر</option>
        <option value='RON'>RON - Romanian Leu - lei</option>
        <option value='RUB'>RUB - Russian Ruble - ₽</option>
        <option value='RWF'>RWF - Rwandan Franc - FRw</option>
        <option value='SVC'>SVC - Salvadoran ColÃ³n - ₡</option>
        <option value='WST'>WST - Samoan Tala - SAT</option>
        <option value='SAR'>SAR - Saudi Riyal - ﷼</option>
        <option value='RSD'>RSD - Serbian Dinar - din</option>
        <option value='SCR'>SCR - Seychellois Rupee - SRe</option>
        <option value='SLL'>SLL - Sierra Leonean Leone - Le</option>
        <option value='SGD'>SGD - Singapore Dollar - $</option>
        <option value='SKK'>SKK - Slovak Koruna - Sk</option>
        <option value='SBD'>SBD - Solomon Islands Dollar - Si$</option>
        <option value='SOS'>SOS - Somali Shilling - Sh.so.</option>
        <option value='ZAR'>ZAR - South African Rand - R</option>
        <option value='KRW'>KRW - South Korean Won - ₩</option>
        <option value='XDR'>XDR - Special Drawing Rights - SDR</option>
        <option value='LKR'>LKR - Sri Lankan Rupee - Rs</option>
        <option value='SHP'>SHP - St. Helena Pound - £</option>
        <option value='SDG'>SDG - Sudanese Pound - .س.ج</option>
        <option value='SRD'>SRD - Surinamese Dollar - $</option>
        <option value='SZL'>SZL - Swazi Lilangeni - E</option>
        <option value='SEK'>SEK - Swedish Krona - kr</option>
        <option value='CHF'>CHF - Swiss Franc - CHf</option>
        <option value='SYP'>SYP - Syrian Pound - LS</option>
        <option value='STD'>STD - São Tomé and Príncipe Dobra - Db</option>
        <option value='TJS'>TJS - Tajikistani Somoni - SM</option>
        <option value='TZS'>TZS - Tanzanian Shilling - TSh</option>
        <option value='THB'>THB - Thai Baht - ฿</option>
        <option value='TOP'>TOP - Tongan pa'anga - $</option>
        <option value='TTD'>TTD - Trinidad & Tobago Dollar - $</option>
        <option value='TND'>TND - Tunisian Dinar - ت.د</option>
        <option value='TRY'>TRY - Turkish Lira - ₺</option>
        <option value='TMT'>TMT - Turkmenistani Manat - T</option>
        <option value='UGX'>UGX - Ugandan Shilling - USh</option>
        <option value='UAH'>UAH - Ukrainian Hryvnia - ₴</option>
        <option value='AED'>AED - United Arab Emirates Dirham - إ.د</option>
        <option value='UYU'>UYU - Uruguayan Peso - $</option>
        <option value='USD'>USD - US Dollar - $</option>
        <option value='UZS'>UZS - Uzbekistan Som - лв</option>
        <option value='VUV'>VUV - Vanuatu Vatu - VT</option>
        <option value='VEF'>VEF - Venezuelan BolÃ­var - Bs</option>
        <option value='VND'>VND - Vietnamese Dong - ₫</option>
        <option value='YER'>YER - Yemeni Rial - ﷼</option>
        <option value='ZMK'>ZMK - Zambian Kwacha - ZK</option>
      </select>
    </div>
  );
}

export default SideComponent