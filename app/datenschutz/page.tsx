import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-white border-b border-gray-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Datenschutzerklärung
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß Art. 13, 14 DSGVO
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* Einleitung */}
            <div className="mb-12">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  Wir freuen uns über Ihr Interesse an unserer Website und unseren Dienstleistungen. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
                </p>
              </div>
            </div>

            {/* 1. Verantwortlicher */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Verantwortlicher</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-white rounded-lg p-4 space-y-2 text-gray-700">
                  <p className="font-semibold">GOLDEN SOUL UG</p>
                  <p>Dortmunder Str. 2</p>
                  <p>04357 Leipzig</p>
                  <p>Deutschland</p>
                  <p className="pt-2">
                    <span className="font-semibold">E-Mail:</span>{" "}
                    <a href="mailto:info@leadboom.de" className="text-purple-600 hover:text-purple-700">
                      info@leadboom.de
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Telefon:</span>{" "}
                    <a href="tel:+491778710181" className="text-purple-600 hover:text-purple-700">
                      +49 177 8710181
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Datenschutzbeauftragter */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Datenschutzbeauftragter</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  Bei Fragen zum Datenschutz können Sie sich an unseren Datenschutzbeauftragten wenden:
                </p>
                <div className="bg-white rounded-lg p-4 text-gray-700">
                  <p>
                    <a href="mailto:datenschutz@leadboom.de" className="text-purple-600 hover:text-purple-700 font-medium">
                      datenschutz@leadboom.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Allgemeines zur Datenverarbeitung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Allgemeines zur Datenverarbeitung</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Umfang der Verarbeitung</h3>
                  <p>
                    Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Rechtsgrundlage</h3>
                  <p>
                    Soweit wir für Verarbeitungsvorgänge eine Einwilligung einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur Erfüllung eines Vertrages dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Zur Wahrung unserer berechtigten Interessen dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 Datenlöschung und Speicherdauer</h3>
                  <p>
                    Die personenbezogenen Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch europäische oder nationale Rechtsvorschriften vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung besteht.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Bereitstellung der Website */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Bereitstellung der Website und Erstellung von Logfiles</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Beschreibung und Umfang</h3>
                  <p className="mb-3">
                    Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden erhoben:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informationen über den Browsertyp und die verwendete Version</li>
                    <li>Das Betriebssystem des Nutzers</li>
                    <li>Den Internet-Service-Provider des Nutzers</li>
                    <li>Die IP-Adresse des Nutzers</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Websites, von denen das System des Nutzers auf unsere Website gelangt</li>
                    <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Rechtsgrundlage</h3>
                  <p>
                    Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Zweck der Datenverarbeitung</h3>
                  <p>
                    Die vorübergehende Speicherung der IP-Adresse ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen und zur Optimierung der Website sowie zur Sicherstellung der Sicherheit unserer IT-Systeme.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.4 Speicherdauer</h3>
                  <p>
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Die Logfiles werden nach spätestens 7 Tagen gelöscht.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Registrierung und Nutzerkonto */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Registrierung und Nutzerkonto</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Beschreibung und Umfang</h3>
                  <p className="mb-3">
                    Auf unserer Website bieten wir Nutzern die Möglichkeit, sich unter Angabe personenbezogener Daten zu registrieren. Folgende Daten werden dabei erhoben:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Vor- und Nachname</li>
                    <li>E-Mail-Adresse</li>
                    <li>Unternehmen</li>
                    <li>Telefonnummer</li>
                    <li>Passwort (verschlüsselt gespeichert)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Rechtsgrundlage</h3>
                  <p>
                    Rechtsgrundlage für die Verarbeitung ist bei Vorliegen einer Einwilligung Art. 6 Abs. 1 lit. a DSGVO. Dient die Registrierung der Erfüllung eines Vertrages, ist zusätzliche Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Zweck der Datenverarbeitung</h3>
                  <p>
                    Eine Registrierung ist zur Bereitstellung bestimmter Inhalte und Leistungen auf unserer Website erforderlich. Die Registrierung dient der Erfüllung eines Vertrages mit dem Nutzer oder zur Durchführung vorvertraglicher Maßnahmen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.4 Speicherdauer</h3>
                  <p>
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist für die Registrierungsdaten der Fall, wenn die Registrierung aufgehoben oder abgeändert wird. Nach Beendigung des Vertrages werden die Daten für 30 Tage gesperrt und anschließend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Kontaktformular und E-Mail */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Kontaktformular und E-Mail-Kontakt</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Beschreibung und Umfang</h3>
                  <p>
                    Auf unserer Website ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Die im Rahmen der Kontaktaufnahme übermittelten Daten werden bei uns gespeichert. Alternativ ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Rechtsgrundlage</h3>
                  <p>
                    Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO bei erteilter Einwilligung bzw. Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Beantwortung von Anfragen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Zweck der Datenverarbeitung</h3>
                  <p>
                    Die Verarbeitung der personenbezogenen Daten dient uns allein zur Bearbeitung der Kontaktaufnahme.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.4 Speicherdauer</h3>
                  <p>
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten aus dem Kontaktformular und E-Mail ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Google Kalender Integration */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Google Kalender Integration</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Datenerhebung</h3>
                  <p className="mb-3">
                    Wenn Sie Ihre Google Kalender-Integration in LeadBoom aktivieren, erheben und speichern wir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kalendernamen und Kalender-IDs</li>
                    <li>Termininformationen (Titel, Beschreibung, Datum, Uhrzeit, Ort)</li>
                    <li>Teilnehmerinformationen</li>
                    <li>Terminstatus (bestätigt, abgesagt, etc.)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2 Verwendungszweck</h3>
                  <p className="mb-3">
                    Wir verwenden Ihre Kalenderdaten um:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Termine in LeadBoom anzuzeigen und zu synchronisieren</li>
                    <li>Verfügbarkeitszeiten zu ermitteln</li>
                    <li>Terminvorschläge für Leads und Kontakte zu generieren</li>
                    <li>Erinnerungen und Benachrichtigungen zu senden</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7.3 Datenspeicherung</h3>
                  <p>
                    Ihre Google Kalenderdaten werden in unserer Datenbank gespeichert und regelmäßig mit Ihrem Google Kalender synchronisiert. Die Daten werden auf sicheren Servern in <span className="font-semibold text-purple-600">[Deutschland/EU - specify your server location]</span> gespeichert und durch moderne Verschlüsselungstechnologien geschützt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7.4 Weitergabe von Daten</h3>
                  <p>
                    Ihre Google Kalenderdaten werden NICHT an Dritte weitergegeben, verkauft oder für Werbezwecke verwendet. Die Daten verbleiben ausschließlich in Ihrem LeadBoom-Account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7.5 Löschung der Daten</h3>
                  <p className="mb-3">
                    Sie können die Kalenderverbindung jederzeit in Ihren LeadBoom-Einstellungen trennen. Bei Trennung der Verbindung werden alle gespeicherten Kalenderdaten innerhalb von <span className="font-semibold text-purple-600">[X Tagen - specify timeframe]</span> aus unserer Datenbank gelöscht.
                  </p>
                  <p>
                    Bei Löschung Ihres LeadBoom-Accounts werden alle Kalenderdaten sofort und unwiderruflich gelöscht.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7.6 Zugriffsberechtigung</h3>
                  <p className="mb-3">
                    LeadBoom benötigt folgende Berechtigungen:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Lesezugriff auf Ihre Kalender und Termine</li>
                    <li className="font-semibold text-purple-600">[Schreibzugriff zum Erstellen von Terminen - if applicable, otherwise remove this line]</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7.7 Rechtsgrundlage</h3>
                  <p>
                    Rechtsgrundlage für die Verarbeitung Ihrer Google Kalenderdaten ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie erteilen diese Einwilligung bei der Aktivierung der Kalender-Integration. Die Einwilligung kann jederzeit durch Trennen der Verbindung widerrufen werden.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Cookies</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1 Beschreibung und Umfang</h3>
                  <p>
                    Unsere Website verwendet Cookies. Cookies sind Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2 Rechtsgrundlage</h3>
                  <p>
                    Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für Cookies, die zu Marketing- oder Analysezwecken eingesetzt werden, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8.3 Zweck der Datenverarbeitung</h3>
                  <p>
                    Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Website können ohne den Einsatz von Cookies nicht angeboten werden.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8.4 Speicherdauer und Widerspruchsmöglichkeit</h3>
                  <p>
                    Cookies werden auf dem Rechner des Nutzers gespeichert. Daher haben Sie als Nutzer die volle Kontrolle über die Verwendung von Cookies. Sie können die Übertragung von Cookies deaktivieren oder einschränken, indem Sie die Einstellungen Ihres Internetbrowsers ändern.
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Ihre Rechte */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Ihre Rechte als betroffene Person</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p className="mb-4">
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener im Sinne der DSGVO und es stehen Ihnen folgende Rechte zu:
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.1 Auskunftsrecht (Art. 15 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden. Liegt eine solche Verarbeitung vor, können Sie Auskunft über diese personenbezogenen Daten verlangen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.2 Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.3 Recht auf Löschung (Art. 17 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, von uns zu verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der gesetzlich vorgesehenen Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu verlangen, wenn eine der gesetzlichen Voraussetzungen gegeben ist.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie haben außerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch uns zu übermitteln.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.7 Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.8 Beschwerderecht (Art. 77 DSGVO)</h3>
                  <p>
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                  </p>
                </div>
              </div>
            </div>

            {/* 10. Datensicherheit */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Datensicherheit</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
                </p>
                <p>
                  Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
                </p>
              </div>
            </div>

            {/* 11. Aktualität */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-gray-600">
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website von Ihnen abgerufen und ausgedruckt werden.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fragen zum Datenschutz?</h3>
                <p className="text-gray-600 mb-4">
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
                </p>
                <a href="mailto:datenschutz@leadboom.de" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                  datenschutz@leadboom.de
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zur Startseite
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
