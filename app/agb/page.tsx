import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AGBPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Gültig ab {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* § 1 Geltungsbereich */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 1 Geltungsbereich</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge über die Nutzung der Leadboom-Plattform und die damit verbundenen Dienstleistungen zwischen der GOLDEN SOUL UG (nachfolgend "Leadboom" oder "Anbieter") und dem Kunden (nachfolgend "Kunde" oder "Nutzer").
                </p>
                <p>
                  (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wurde ausdrücklich schriftlich zugestimmt.
                </p>
                <p>
                  (3) Diese AGB gelten auch für alle zukünftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals ausdrücklich vereinbart werden.
                </p>
              </div>
            </div>

            {/* § 2 Vertragsgegenstand */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 2 Vertragsgegenstand</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Leadboom stellt dem Kunden eine cloudbasierte CRM- und Marketing-Automatisierungsplattform zur Verfügung, die Lead-Generierung, Kundenverwaltung und Geschäftsprozess-Automatisierung ermöglicht.
                </p>
                <p>
                  (2) Der genaue Leistungsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung und dem gewählten Tarifmodell.
                </p>
                <p>
                  (3) Leadboom behält sich das Recht vor, die bereitgestellten Dienste weiterzuentwickeln und zu verbessern. Der Kunde hat keinen Anspruch auf Beibehaltung bestimmter Funktionen, sofern die Kernfunktionalität erhalten bleibt.
                </p>
                <p>
                  (4) Leadboom schuldet die Erbringung der Leistungen mit einer Verfügbarkeit von 99,5% im Jahresmittel. Hiervon ausgenommen sind Wartungsarbeiten und Zeiten, in denen die Dienste aufgrund technischer oder sonstiger Probleme, die nicht im Einflussbereich von Leadboom liegen, nicht erreichbar sind.
                </p>
              </div>
            </div>

            {/* § 3 Vertragsschluss */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 3 Vertragsschluss</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Der Vertrag kommt durch die Registrierung des Kunden auf der Leadboom-Plattform und die Auswahl eines kostenpflichtigen Tarifs zustande.
                </p>
                <p>
                  (2) Mit der Registrierung gibt der Kunde ein verbindliches Angebot zum Abschluss eines Nutzungsvertrags ab. Leadboom nimmt dieses Angebot durch Freischaltung des gewählten Tarifs an.
                </p>
                <p>
                  (3) Der Vertragstext wird von Leadboom gespeichert und dem Kunden per E-Mail zugesandt. Der Kunde kann den Vertragstext auch in seinem Kundenkonto einsehen.
                </p>
              </div>
            </div>

            {/* § 4 Nutzungsrechte */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 4 Nutzungsrechte</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Leadboom räumt dem Kunden das nicht ausschließliche, nicht übertragbare und auf die Vertragslaufzeit beschränkte Recht ein, die Leadboom-Plattform vertragsgemäß zu nutzen.
                </p>
                <p>
                  (2) Der Kunde ist nicht berechtigt, die Software zu dekompilieren, zu disassemblieren oder in sonstiger Weise zurückzuentwickeln, es sei denn, dies ist gesetzlich ausdrücklich gestattet.
                </p>
                <p>
                  (3) Die Nutzung der Plattform ist nur zu geschäftlichen Zwecken gestattet. Eine private Nutzung ist ausgeschlossen.
                </p>
              </div>
            </div>

            {/* § 5 Pflichten des Kunden */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 5 Pflichten des Kunden</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Der Kunde ist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und diese bei Änderungen unverzüglich zu aktualisieren.
                </p>
                <p>
                  (2) Der Kunde ist für die Geheimhaltung seiner Zugangsdaten selbst verantwortlich. Er hat Leadboom unverzüglich zu informieren, wenn ihm bekannt wird, dass unbefugte Dritte Kenntnis von seinen Zugangsdaten erlangt haben.
                </p>
                <p>
                  (3) Der Kunde verpflichtet sich, die Plattform nicht für rechtswidrige Zwecke zu nutzen, insbesondere nicht zur Versendung von Spam oder zur Verletzung von Rechten Dritter.
                </p>
                <p>
                  (4) Der Kunde stellt Leadboom von sämtlichen Ansprüchen Dritter frei, die aufgrund einer rechtswidrigen Nutzung der Plattform durch den Kunden entstehen.
                </p>
              </div>
            </div>

            {/* § 6 Vergütung und Zahlungsbedingungen */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 6 Vergütung und Zahlungsbedingungen</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Die Vergütung richtet sich nach dem vom Kunden gewählten Tarifmodell und ist der jeweils aktuellen Preisliste zu entnehmen.
                </p>
                <p>
                  (2) Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
                </p>
                <p>
                  (3) Die Abrechnung erfolgt je nach gewähltem Tarif monatlich oder jährlich im Voraus. Die Zahlung ist per Lastschrift, Kreditkarte oder Überweisung möglich.
                </p>
                <p>
                  (4) Bei Zahlungsverzug ist Leadboom berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu verlangen. Die Geltendmachung eines weitergehenden Schadens bleibt vorbehalten.
                </p>
                <p>
                  (5) Leadboom behält sich das Recht vor, die Preise mit einer Ankündigungsfrist von einem Monat anzupassen. Der Kunde hat in diesem Fall das Recht zur außerordentlichen Kündigung.
                </p>
              </div>
            </div>

            {/* § 7 Vertragslaufzeit und Kündigung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 7 Vertragslaufzeit und Kündigung</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Die Vertragslaufzeit richtet sich nach dem gewählten Tarifmodell und beträgt wahlweise einen Monat oder ein Jahr.
                </p>
                <p>
                  (2) Der Vertrag verlängert sich automatisch um die ursprüngliche Laufzeit, wenn er nicht mit einer Frist von 30 Tagen zum Ende der Laufzeit gekündigt wird.
                </p>
                <p>
                  (3) Die Kündigung muss schriftlich (per E-Mail ausreichend) erfolgen.
                </p>
                <p>
                  (4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn der Kunde gegen wesentliche Vertragspflichten verstößt und trotz Abmahnung keine Abhilfe schafft.
                </p>
                <p>
                  (5) Nach Beendigung des Vertrags werden die Kundendaten für 30 Tage aufbewahrt und können vom Kunden exportiert werden. Danach werden sie unwiderruflich gelöscht.
                </p>
              </div>
            </div>

            {/* § 8 Datenschutz und Datensicherheit */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 8 Datenschutz und Datensicherheit</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Leadboom verarbeitet personenbezogene Daten des Kunden ausschließlich nach den Vorgaben der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
                </p>
                <p>
                  (2) Einzelheiten zur Datenverarbeitung sind in der <Link href="/datenschutz" className="text-purple-600 hover:text-purple-700 font-medium">Datenschutzerklärung</Link> geregelt.
                </p>
                <p>
                  (3) Soweit der Kunde personenbezogene Daten über die Plattform verarbeitet, erfolgt dies in eigener Verantwortung. Leadboom handelt insoweit als Auftragsverarbeiter im Sinne von Art. 28 DSGVO.
                </p>
                <p>
                  (4) Leadboom trifft angemessene technische und organisatorische Maßnahmen zum Schutz der Daten vor Verlust, Zerstörung, Verfälschung oder unbefugtem Zugriff.
                </p>
              </div>
            </div>

            {/* § 9 Haftung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 9 Haftung</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Leadboom haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für die Verletzung von Leben, Körper und Gesundheit.
                </p>
                <p>
                  (2) Bei leichter Fahrlässigkeit haftet Leadboom nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
                </p>
                <p>
                  (3) Die vorstehenden Haftungsbeschränkungen gelten nicht bei arglistigem Verschweigen eines Mangels oder bei Übernahme einer Garantie.
                </p>
                <p>
                  (4) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
                </p>
                <p>
                  (5) Soweit die Haftung von Leadboom ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung der Mitarbeiter, Vertreter und Erfüllungsgehilfen.
                </p>
              </div>
            </div>

            {/* § 10 Höhere Gewalt */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 10 Höhere Gewalt</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  Leadboom ist von der Leistungspflicht befreit, soweit und solange die Leistungserbringung durch höhere Gewalt oder sonstige zum Zeitpunkt des Vertragsschlusses nicht vorhersehbare Ereignisse (z.B. Betriebsstörungen aller Art, Streik, behördliche Maßnahmen) unmöglich oder unzumutbar wird. Dies gilt auch, wenn die Hindernisse bei Subunternehmern von Leadboom eintreten.
                </p>
              </div>
            </div>

            {/* § 11 Änderung der AGB */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 11 Änderung der AGB</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Leadboom behält sich vor, diese AGB jederzeit mit Wirkung für die Zukunft zu ändern.
                </p>
                <p>
                  (2) Die Änderungen werden dem Kunden mindestens sechs Wochen vor ihrem Inkrafttreten per E-Mail mitgeteilt.
                </p>
                <p>
                  (3) Widerspricht der Kunde den geänderten AGB nicht innerhalb von sechs Wochen nach Zugang der Änderungsmitteilung, gelten die geänderten AGB als vereinbart. Leadboom wird den Kunden in der Änderungsmitteilung auf die Bedeutung dieser Frist besonders hinweisen.
                </p>
                <p>
                  (4) Widerspricht der Kunde fristgerecht, ist Leadboom berechtigt, den Vertrag außerordentlich zum Zeitpunkt des geplanten Inkrafttretens der Änderungen zu kündigen.
                </p>
              </div>
            </div>

            {/* § 12 Schlussbestimmungen */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 12 Schlussbestimmungen</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-gray-600">
                <p>
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p>
                  (2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag Berlin.
                </p>
                <p>
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fragen zu den AGB?</h3>
                <p className="text-gray-600 mb-4">
                  Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen können Sie uns jederzeit kontaktieren:
                </p>
                <a href="mailto:info@leadboom.de" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                  info@leadboom.de
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
